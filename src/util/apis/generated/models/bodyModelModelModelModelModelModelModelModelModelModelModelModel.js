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
 * Class representing a BodyModelModelModelModelModelModelModelModelModelModelModelModel.
 */
class BodyModelModelModelModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModelModelModelModel.
   * @property {string} serviceConnectionId Service connection id to updated.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          serviceConnectionId: {
            required: true,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModelModelModelModel;
