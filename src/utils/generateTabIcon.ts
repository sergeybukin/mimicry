import {
  sunnyOutline,
  shirtOutline,
  settingsOutline,
  sunnySharp,
  shirtSharp,
  settingsSharp,
} from "ionicons/icons";

export const generateTabIcon = (currentTab: string, thisTab: string) => {
  let res;

  switch (thisTab) {
    case "main":
      res = currentTab === thisTab ? sunnySharp : sunnyOutline;
      break;
    case "closet":
      res = currentTab === thisTab ? shirtSharp : shirtOutline;
      break;
    case "settings":
      res = currentTab === thisTab ? settingsSharp : settingsOutline;
      break;
    default:
      res = sunnyOutline;
      break;
  }

  return res;
};
