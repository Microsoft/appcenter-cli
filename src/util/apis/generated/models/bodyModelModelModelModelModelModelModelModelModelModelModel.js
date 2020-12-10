/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A request containing information pertaining to begin a release upload
 * process
 *
 */
class BodyModelModelModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModelModelModel.
   * @property {number} [releaseId] Optional value for explicitly specifying
   * the ID of existing release.
   * @property {string} [buildVersion] The build version of the uploaded
   * binary, used for macOS, Windows and Custom app support.
   * @property {string} [buildNumber] The build number of the uploaded binary,
   * used with build_version for macOS app support.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          releaseId: {
            required: false,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          },
          buildVersion: {
            required: false,
            serializedName: 'build_version',
            type: {
              name: 'String'
            }
          },
          buildNumber: {
            required: false,
            serializedName: 'build_number',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModelModelModel;
