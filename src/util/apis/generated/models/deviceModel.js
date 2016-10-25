/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeviceModel class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [manufacturer]
 * 
 * @member {string} [model]
 * 
 * @member {string} [releaseDate]
 * 
 * @member {string} [platform]
 * 
 */
function DeviceModel() {
}

/**
 * Defines the metadata of DeviceModel
 *
 * @returns {object} metadata of DeviceModel
 *
 */
DeviceModel.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceModel',
    type: {
      name: 'Composite',
      className: 'DeviceModel',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        manufacturer: {
          required: false,
          serializedName: 'manufacturer',
          type: {
            name: 'String'
          }
        },
        model: {
          required: false,
          serializedName: 'model',
          type: {
            name: 'String'
          }
        },
        releaseDate: {
          required: false,
          serializedName: 'releaseDate',
          type: {
            name: 'String'
          }
        },
        platform: {
          required: false,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceModel;
