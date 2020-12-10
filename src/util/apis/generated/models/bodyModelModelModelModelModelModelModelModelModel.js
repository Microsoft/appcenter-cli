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
 * A request containing information for updating a release.
 *
 */
class BodyModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModel.
   * @property {string} [distributionGroupName] OBSOLETE. Will be removed in
   * future releases - use destinations instead. Name of a distribution group.
   * The release will be associated with this distribution group. If the
   * distribution group doesn't exist a 400 is returned. If both distribution
   * group name and id are passed, the id is taking precedence.
   * @property {string} [distributionGroupId] OBSOLETE. Will be removed in
   * future releases - use destinations instead. Id of a distribution group.
   * The release will be associated with this distribution group. If the
   * distribution group doesn't exist a 400 is returned. If both distribution
   * group name and id are passed, the id is taking precedence.
   * @property {string} [destinationName] OBSOLETE. Will be removed in future
   * releases - use destinations instead. Name of a destination. The release
   * will be associated with this destination. If the destination doesn't exist
   * a 400 is returned. If both distribution group name and id are passed, the
   * id is taking precedence.
   * @property {string} [destinationId] OBSOLETE. Will be removed in future
   * releases - use destinations instead. Id of a destination. The release will
   * be associated with this destination. If the destination doesn't exist a
   * 400 is returned. If both destination name and id are passed, the id is
   * taking precedence.
   * @property {string} [destinationType] Not used anymore.
   * @property {string} [releaseNotes] Release notes for this release.
   * @property {boolean} [mandatoryUpdate] A boolean which determines whether
   * this version should be a mandatory update or not.
   * @property {array} [destinations] Distribute this release under the
   * following list of destinations (store groups or distribution groups).
   * @property {object} [build] Contains metadata about the build that produced
   * the release being uploaded
   * @property {string} [build.branchName] The branch name of the build
   * producing the release
   * @property {string} [build.commitHash] The commit hash of the build
   * producing the release
   * @property {string} [build.commitMessage] The commit message of the build
   * producing the release
   * @property {boolean} [notifyTesters] A boolean which determines whether to
   * notify testers of a new release, default to true. Default value: true .
   * @property {object} [metadata] An object containing all the release
   * metadata.
   * @property {string} [metadata.dsaSignature] dsa signature of the release
   * for the sparkle feed.
   * @property {string} [metadata.edSignature] edDSA signature of the release
   * for the sparkle feed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          distributionGroupName: {
            required: false,
            serializedName: 'distribution_group_name',
            type: {
              name: 'String'
            }
          },
          distributionGroupId: {
            required: false,
            serializedName: 'distribution_group_id',
            type: {
              name: 'String'
            }
          },
          destinationName: {
            required: false,
            serializedName: 'destination_name',
            type: {
              name: 'String'
            }
          },
          destinationId: {
            required: false,
            serializedName: 'destination_id',
            type: {
              name: 'String'
            }
          },
          destinationType: {
            required: false,
            serializedName: 'destination_type',
            type: {
              name: 'String'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BodyDestinationsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'BodyDestinationsItem'
                  }
              }
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'Composite',
              className: 'BodyBuild'
            }
          },
          notifyTesters: {
            required: false,
            serializedName: 'notify_testers',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Composite',
              className: 'BodyMetadata'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModel;
