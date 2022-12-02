"uce strict";

class Sphere extends Figure3D {
  /**
   *
   * @param {number} radius
   */
  constructor(radius) {
    super("sphere");
    this.radius = radius;
  }
  set radius(radius) {
    if (checkSet(radius)) {
      this._radius = radius;
    }
  }
  get radius() {
    return this_radius;
  }
  getValume() {
    return (4 / 3) * (Math.PI * Math.pow(this._radius, 3));
  }
}

try {
  const figure_1 = new Sphere(12);
  console.log(figure_1);

  console.log(getVolume3DFigure(figure_1));
} catch (error) {
  console.log(error);
}
