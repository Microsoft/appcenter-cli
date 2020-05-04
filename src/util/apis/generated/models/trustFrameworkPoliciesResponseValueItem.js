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
 * Class representing a TrustFrameworkPoliciesResponseValueItem.
 */
class TrustFrameworkPoliciesResponseValueItem {
  /**
   * Create a TrustFrameworkPoliciesResponseValueItem.
   * @property {string} [id]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrustFrameworkPoliciesResponseValueItem
   *
   * @returns {object} metadata of TrustFrameworkPoliciesResponseValueItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrustFrameworkPoliciesResponse_valueItem',
      type: {
        name: 'Composite',
        className: 'TrustFrameworkPoliciesResponseValueItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrustFrameworkPoliciesResponseValueItem;