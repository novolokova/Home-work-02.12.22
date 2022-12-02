"use strict";
/**
 * 
 * @param {number} value 
 * @returns {boolean}
 */
function checkSet(value) {
  if (typeof value !== "number") {
    throw new TypeError(`"${value}" figure must be number`);
  }
  if (value <= 0) {
    throw new RangeError(`"${value}" figure must be bigest than '0' `);
  }
  return true;
}
