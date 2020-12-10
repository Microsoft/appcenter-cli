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
 * Class representing a BodyModel.
 */
class BodyModel {
  /**
   * Create a BodyModel.
   * @property {string} uploadStatus The new status of the release upload.
   * Possible values include: 'uploadFinished', 'uploadCanceled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModel
   *
   * @returns {object} metadata of BodyModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModel',
        modelProperties: {
          uploadStatus: {
            required: true,
            serializedName: 'upload_status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModel;
