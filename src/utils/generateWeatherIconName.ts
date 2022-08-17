import { IconNamesType } from "../components/ui/Icon/types";

export const generateWeatherIconName: (str: string) => IconNamesType = (
  str
) => {
  const arr = str.split("_");
  let res: IconNamesType = "sun";

  arr.forEach((e) => {
    const num = parseInt(e[e.length - 1]);
    switch (e[0]) {
      case "n":
        res = "moon";
        break;
      case "d":
        res = "sun";
        break;
      case "c":
        if (num === 1) {
          res = res === "sun" ? "sun-clouds" : "moon-clouds";
        } else {
          res = "clouds";
        }
        break;
      case "r":
        res = "rain";
        break;
      case "s":
        res = e[1] === "t" ? "thunder" : "snow";
        break;
    }
  });
  return res;
};
