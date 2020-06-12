import { McFusUploader } from "../../../../src/commands/distribute/lib/mc-fus-uploader/mc-fus-uploader";
import {
  IInitializeSettings,
  McFusMessageLevel,
  LogProperties,
  IProgress,
  McFusUploadState,
  McFusFile,
} from "../../../../src/commands/distribute/lib/mc-fus-uploader/mc-fus-uploader-types";
import * as TypeMoq from "typemoq";
import * as assert from "assert";
import * as uuid from "uuid";
import "abort-controller/polyfill";

import nock = require("nock");

class McFile implements McFusFile {
  name: string;
  fileSize: number;

  constructor(name: string, filesize: number) {
    this.name = name;
    this.fileSize = filesize;
  }

  slice(start: number, end: number): Buffer {
    throw new Error("Method not implemented.");
  }

  get fileName(): string {
    return this.name;
  }

  get size(): number {
    return this.fileSize;
  }
}

const globalAsAny = global as any;
globalAsAny.window = {};
(URL as any).createObjectURL = () => {};

// For the following two dependencies, we might want to move it to tests if we want to cover isBrowserSupported
globalAsAny.window.File = McFile;

// End of stub of browser dependencies

describe("McFusUploader", () => {
  describe("#Start", () => {
    const onProgressMock = TypeMoq.Mock.ofInstance((_progress: IProgress) => {});
    const onMessageMock = TypeMoq.Mock.ofInstance(
      (_message: string, _properties: LogProperties, _messageLevel: McFusMessageLevel) => {}
    );
    const onStateChangedMock = TypeMoq.Mock.ofInstance((_state: McFusUploadState) => {});
    const uploadSettings: IInitializeSettings = {
      AssetId: uuid.v4(),
      UrlEncodedToken: "encodedToken",
      UploadDomain: "http://upload.ms",
      Tenant: "distribution",
      onProgressChanged: onProgressMock.object,
      onMessage: onMessageMock.object,
      onStateChanged: onStateChangedMock.object,
      onCompleted: () => {},
      onResumeRestart: () => {},
    };

    afterEach(() => {
      onProgressMock.reset();
      onMessageMock.reset();
      onStateChangedMock.reset();
    });

    context("When an invalid file is provided", () => {
      it("Should send a message and return when the file is null", () => {
        const setMetadata = nock("http://upload.ms")
          .post((uri) => uri.includes("set_metadata"))
          .reply(200, "{}");
        const uploader = new McFusUploader(uploadSettings);
        uploader.Start(null);
        onMessageMock.verify(
          (callback) =>
            callback(
              TypeMoq.It.is((message) => message.includes("file must be specified")),
              TypeMoq.It.isAny(),
              TypeMoq.It.isValue(McFusMessageLevel.Error)
            ),
          TypeMoq.Times.once()
        );
        assert.strictEqual(uploader.uploadData.File, undefined);
        onProgressMock.verify((callback) => callback(TypeMoq.It.isAny()), TypeMoq.Times.never());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.New), TypeMoq.Times.once());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.Initialized), TypeMoq.Times.never());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.Error), TypeMoq.Times.once());
        assert.strictEqual(setMetadata.isDone(), false);
      });

      it("Should send a message and return when the file is empty", () => {
        const setMetadata = nock("http://upload.ms")
          .post((uri) => uri.includes("set_metadata"))
          .reply(200, "{}");
        const uploader = new McFusUploader(uploadSettings);
        uploader.Start(new McFile("test", 0));
        onMessageMock.verify(
          (callback) =>
            callback(
              TypeMoq.It.is((message) => message.includes("file must be specified")),
              TypeMoq.It.isAny(),
              TypeMoq.It.isValue(McFusMessageLevel.Error)
            ),
          TypeMoq.Times.once()
        );
        assert.strictEqual(uploader.uploadData.File, undefined);
        onProgressMock.verify((callback) => callback(TypeMoq.It.isAny()), TypeMoq.Times.never());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.New), TypeMoq.Times.once());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.Initialized), TypeMoq.Times.never());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.Error), TypeMoq.Times.once());
        assert.strictEqual(setMetadata.isDone(), false);
      });
    });

    context("When file is valid", () => {
      let uploader: any;
      const testFile = new McFile("test1", 100);

      beforeEach(() => {
        uploader = new McFusUploader(uploadSettings);
        nock.cleanAll();
      });

      it("Should be initialized and set metadata", () => {
        const setMetadata = nock("http://upload.ms")
          .post((uri) => uri.includes("set_metadata"))
          .reply(200, "{}");
        uploader.Start(testFile);

        assert.strictEqual(uploader.uploadData.File, testFile);
        onProgressMock.verify((callback) => callback(TypeMoq.It.isAny()), TypeMoq.Times.once());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.New), TypeMoq.Times.once());
        onStateChangedMock.verify((callback) => callback(McFusUploadState.Initialized), TypeMoq.Times.once());
        assert.strictEqual(setMetadata.isDone(), true);
      });

      context("When the POST to upload/set_metadata fails", () => {
        it("Should log an error message and be in failed state", (done) => {
          nock.cleanAll();
          nock("http://upload.ms")
            .post((uri) => uri.includes("set_metadata"))
            .reply(500, "{}")
            .persist();
          uploader.Start(testFile);
          setTimeout(function () {
            onMessageMock.verify(
              (callback) =>
                callback(
                  TypeMoq.It.is((message) => message.includes("asset cannot be uploaded")),
                  TypeMoq.It.isAny(),
                  TypeMoq.It.isValue(McFusMessageLevel.Error)
                ),
              TypeMoq.Times.once()
            );
            assert.strictEqual(uploader.uploadStatus.State, McFusUploadState.FatalError);
            onStateChangedMock.verify((callback) => callback(McFusUploadState.FatalError), TypeMoq.Times.once());
            done();
          }, 200);
        });
      });

      context("When the POST to upload/set_metadata succeeds", () => {
        context("When getting an html document or non-JSON response back", () => {
          it("Should strip off everything outside the body tags and log an error and be in failed state", (done) => {
            nock.cleanAll();
            const request = nock("http://upload.ms").post(/.*/).reply(200, "<!DOCTYPE html><html></html>").persist();
            uploader.Start(testFile);
            setTimeout(function () {
              onMessageMock.verify(
                (callback) =>
                  callback(
                    TypeMoq.It.is((message) => message.includes("asset cannot be uploaded")),
                    TypeMoq.It.isObjectWith({ fileName: testFile.name, fileSize: testFile.size, StatusCode: 200 }),
                    TypeMoq.It.isValue(McFusMessageLevel.Error)
                  ),
                TypeMoq.Times.once()
              );
              assert.strictEqual(uploader.uploadStatus.State, McFusUploadState.FatalError);
              onProgressMock.verify((callback) => callback(TypeMoq.It.isAny()), TypeMoq.Times.once());
              onStateChangedMock.verify((callback) => callback(McFusUploadState.New), TypeMoq.Times.once());
              onStateChangedMock.verify((callback) => callback(McFusUploadState.Initialized), TypeMoq.Times.once());
              onStateChangedMock.verify((callback) => callback(McFusUploadState.FatalError), TypeMoq.Times.once());
              assert.strictEqual(request.isDone(), true);
              done();
            }, 500);
          });
        });
      });

      context("When file is already being uploaded", () => {
        it("Should emit a warning and return without updating the file", () => {
          nock.cleanAll();
          nock("http://upload.ms").post(/.*/).reply(200, "{}");
          uploader.Start(testFile);
          uploader.Start(new McFile("test2", 200));
          onMessageMock.verify(
            (callback) =>
              callback(
                TypeMoq.It.is((message) => message.includes("already in progress")),
                TypeMoq.It.isAny(),
                TypeMoq.It.isValue(McFusMessageLevel.Error)
              ),
            TypeMoq.Times.once()
          );

          assert.strictEqual(uploader.uploadData.File, testFile);
          onProgressMock.verify((callback) => callback(TypeMoq.It.isAny()), TypeMoq.Times.once());
          onStateChangedMock.verify((callback) => callback(McFusUploadState.New), TypeMoq.Times.once());
          onStateChangedMock.verify((callback) => callback(McFusUploadState.Initialized), TypeMoq.Times.once());
          onStateChangedMock.verify((callback) => callback(McFusUploadState.FatalError), TypeMoq.Times.never());
          assert.strictEqual(nock.isDone(), true);
        });
      });
    });
  });
});