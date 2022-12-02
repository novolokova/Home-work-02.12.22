"use strict";

class Cylinder extends Figure3D {
  /**
   *
   * @param {number} radius
   * @param {number} height
   */
  constructor(radius, height) {
    super("cylinder");
    this.radius = radius;
    this.height = height;
  }
  set radius(radius) {
    if (checkSet(radius)) {
      this._radius = radius;
    }
  }
  get radius() {
    return this_radius;
  }
  set height(height) {
    if (checkSet(height)) {
      this._height = height;
    }
  }
  get height() {
    return this_height;
  }
  getValume() {
    return Math.PI * Math.pow(this._radius, 2) * this._height;
  }
}

try {
  const figure_3 = new Cylinder(12, 5);
  console.log(figure_3);
  console.log(getVolume3DFigure(figure_3));
} catch (error) {
  console.log(error);
}
