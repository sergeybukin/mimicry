// body surface area
const bodySurfaceArea = (height, weight) =>
  0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425);

//metabolic rate
const metabolicRateSimple = (gender, weight, height, age) => {
  if (gender === "male") {
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  }
  if (gender === "female") {
    return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }
};
// or
const metabolicRateSmart = (w, c, r, Esk, Eres) => w + c + r + Esk + Eres;

// − W: mechanical work performed [W m-2];
// − C + R: convective and radiative, or sensible heat loss from skin surface [W m-2];
// − Esk: evaporative heat loss from skin surface [W m-2];
// − Eres: evaporative heat loss from respiration [W m-2
