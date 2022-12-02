"use strict";

class Cube extends Figeure3D {
  /**
   *
   * @param {number} side
   */
  constructor(side) {
    super("cube");
    this.side = side;
  }
  set side(side) {
    if (checkSet(side)) {
      this._side = side;
    }
  }
  get side() {
    return this._side;
  }
  getValume() {
    return Math.pow(this._side, 3);
  }
}

try {
  const figure_2 = new Cube(5);
  console.log(figure_2);
  console.log(getVolume3DFigure(figure_2));
} catch (error) {
  console.log(error);
}
