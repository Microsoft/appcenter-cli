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
 * A request containing information pertaining to completing a symbol upload
 * process
 *
 */
class BodyModelModelModel {
  /**
   * Create a BodyModelModelModel.
   * @property {string} status The desired operation for the symbol upload.
   * Possible values include: 'committed', 'aborted'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModel',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModel;
