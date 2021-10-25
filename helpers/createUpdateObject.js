/**
 * create-update-object
 * Module to create an update object that will be passed in the update function
 * @module helpers/controllers/createUpdateObject
 */

/**
 * create an update object that will be passed in the update function
 * here we can do some special parsing for a value based on the attribute
 * for exemple: if the attribute name correspond to an attribute that store geometry (GeoJSON), then we want to parse the value to JSON
 * @param {String} attribute
 * @param {String} value
 * @returns {Object}
 */
module.exports = function (attribute, value) {
  return { [attribute]: value }
}
