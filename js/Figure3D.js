"use strict";

class Figure3D {
  /**
   * This is abstract class
   * @param {string} name
   */
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("You can't create instance in abstract class");
    }
    this.name = name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name figure must be string");
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  getValume() {
    throw new Error("you call method abstract class");
  }
}

try {
  const figere = "false figure";
  // console.log(figure.getValume())// error
} catch (error) {
  console.log(error);
}
/**
 * 
 * @param {object} obj 
 * @returns 
 */
function getVolume3DFigure(obj) {
  if (obj instanceof Figure3D) {
    return obj.getValume();
  }
  throw new TypeError("Object must be figure!");
}
