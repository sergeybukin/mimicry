class PMV {
  calculate = () => {
    this.pa =
      this.humidity * 10 * Math.exp(16.6536 - 4030.183 / (this.tempAbs + 235));
    this.icl = this.clothes * 0.155; //thermal insulation of the clothing in M2K/W
    this.m = this.metabolism * 58.15; //metabolic rate in W/M2
    this.w = this.work * 58.15; //external work in W/M2
    this.mw = this.m - this.w; //internal heat production in the human body
    if (this.icl <= 0.078) {
      this.fcl = 1 + 1.29 * this.icl;
    } else {
      this.fcl = 1.05 + 0.645 * this.icl;
    }

    //heat transfer coefficient by forced convection
    this.hcf = 12.1 * Math.sqrt(this.windSpeed);
    this.taa = this.tempAbs + 273;
    this.tra = this.tempRad + 273;

    // we have verified that using the equation below or this t_cla = taa + (35.5 - ta) / (3.5 * (6.45 * icl + .1)) does not affect the PMV value
    this.t_cla = this.taa + (35.5 - this.tempAbs) / (3.5 * this.icl + 0.1);

    this.p1 = this.icl * this.fcl;
    this.p2 = this.p1 * 3.96;
    this.p3 = this.p1 * 100;
    this.p4 = this.p1 * this.taa;
    this.p5 = 308.7 - 0.028 * this.mw + this.p2 * Math.pow(this.tra / 100, 4);
    this.xn = this.t_cla / 100;
    this.xf = this.t_cla / 50;
    this.eps = 0.00015;

    let n = 0;
    while (Math.abs(this.xn - this.xf) > this.eps) {
      this.xf = (this.xf + this.xn) / 2;
      this.hcn = 2.38 * Math.pow(Math.abs(100.0 * this.xf - this.taa), 0.25);
      if (this.hcf > this.hcn) this.hc = this.hcf;
      else this.hc = this.hcn;
      this.xn =
        (this.p5 + this.p4 * this.hc - this.p2 * Math.pow(this.xf, 4)) /
        (100 + this.p3 * this.hc);
      ++n;
      if (n > 150) {
        alert("Math.max iterations exceeded");
        return 1;
      }
    }

    this.tcl = 100 * this.xn - 273;

    // heat loss diff. through skin
    this.hl1 = 3.05 * 0.001 * (5733 - 6.99 * this.mw - this.pa);
    // heat loss by sweating
    if (this.mw > 58.15) {
      this.hl2 = 0.42 * (this.mw - 58.15);
    } else {
      this.hl2 = 0;
    }
    // latent respiration heat loss
    this.hl3 = 1.7 * 0.00001 * this.m * (5867 - this.pa);
    // dry respiration heat loss
    this.hl4 = 0.0014 * this.m * (34 - this.tempAbs);
    // heat loss by radiation
    this.hl5 =
      3.96 * this.fcl * (Math.pow(this.xn, 4) - Math.pow(this.tra / 100, 4));
    // heat loss by convection
    this.hl6 = this.fcl * this.hc * (this.tcl - this.tempAbs);

    this.ts = 0.303 * Math.exp(-0.036 * this.m) + 0.028;

    this.pmv =
      this.ts *
      (this.mw -
        this.hl1 -
        this.hl2 -
        this.hl3 -
        this.hl4 -
        this.hl5 -
        this.hl6);

    this.ppd =
      100.0 -
      95.0 *
        Math.exp(
          -0.03353 * Math.pow(this.pmv, 4.0) - 0.2179 * Math.pow(this.pmv, 2.0)
        );
  };
  tempAbs = 0;
  tempRad = 0;
  windSpeed = 0;
  humidity = 0;
  metabolism = 0;
  clothes = 0;
  work = 0;
  set = (tempAbs, tempRad, windSpeed, humidity, metabolism, clothes, work) => {
    this.tempAbs = tempAbs;
    this.tempRad = tempRad;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.metabolism = metabolism;
    this.clothes = clothes;
    this.work = work || 0;
  };
  get = (parameter) => {
    return this[parameter];
  };
}
const newPMV = new PMV();
newPMV.set(25, 25, 2, 50, 2, 0.3, 0);
newPMV.calculate();
const light = newPMV.get("pmv");
newPMV.set(25, 25, 2, 50, 2, 1.5, 0);
newPMV.calculate();
const hard = newPMV.get("pmv");
console.log(light, hard);
console.log(light - hard);
// -1.7831170163567447
