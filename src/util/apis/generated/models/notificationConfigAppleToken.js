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

const models = require('./index');

/**
 * Apple notification auth token configuration. The 'type' property must be set
 * to 'apns_token_config'.
 *
 * @extends models['NotificationConfig']
 */
class NotificationConfigAppleToken extends models['NotificationConfig'] {
  /**
   * Create a NotificationConfigAppleToken.
   * @property {string} keyId A 10-character key identifier (kid).
   * @property {string} id Application ID.
   * @property {string} prefix Application prefix.
   * @property {string} token Provider Authentication Token.
   * @property {string} endpointType Possible values include: 'production',
   * 'sandbox'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationConfigAppleToken
   *
   * @returns {object} metadata of NotificationConfigAppleToken
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'apns_token_config',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationConfig',
        className: 'NotificationConfigAppleToken',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          keyId: {
            required: true,
            serializedName: 'key_id',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          prefix: {
            required: true,
            serializedName: 'prefix',
            type: {
              name: 'String'
            }
          },
          token: {
            required: true,
            serializedName: 'token',
            type: {
              name: 'String'
            }
          },
          endpointType: {
            required: true,
            serializedName: 'endpoint_type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationConfigAppleToken;
