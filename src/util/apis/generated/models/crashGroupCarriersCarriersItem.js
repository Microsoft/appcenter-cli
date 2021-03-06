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
 * Class representing a CrashGroupCarriersCarriersItem.
 */
class CrashGroupCarriersCarriersItem {
  /**
   * Create a CrashGroupCarriersCarriersItem.
   * @property {string} [carrierName] Carrier name.
   * @property {number} [crashCount] Crash count of carrier.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupCarriersCarriersItem
   *
   * @returns {object} metadata of CrashGroupCarriersCarriersItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupCarriers_carriersItem',
      type: {
        name: 'Composite',
        className: 'CrashGroupCarriersCarriersItem',
        modelProperties: {
          carrierName: {
            required: false,
            serializedName: 'carrier_name',
            type: {
              name: 'String'
            }
          },
          crashCount: {
            required: false,
            serializedName: 'crash_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupCarriersCarriersItem;
