import { TypesOfClothing } from "types/closet";

export const calculateFontSize = (clothingType: TypesOfClothing) => {
  let fontSize = 60;
  switch (clothingType) {
    case TypesOfClothing.HEAD:
      fontSize = 40;
      break;
    case TypesOfClothing.TOP:
      fontSize = 150;
      break;
    case TypesOfClothing.BOTTOM:
      fontSize = 150;
      break;
    case TypesOfClothing.SHOES:
      fontSize = 80;
      break;
    case TypesOfClothing.UNDERWEAR:
      fontSize = 80;
      break;
    case TypesOfClothing.ACCESSORIES:
      fontSize = 80;
      break;
  }
  return fontSize;
};

export const calculateOffset = (clothingType: TypesOfClothing, i: number) => {
  let offset = { x: 0, y: 0 };
  switch (clothingType) {
    case TypesOfClothing.HEAD:
      offset = { x: 100, y: 0 };
      break;
    case TypesOfClothing.TOP:
      offset = { x: 150, y: 0 };
      break;
    case TypesOfClothing.BOTTOM:
      offset = { x: 250, y: 0 };
      break;
    case TypesOfClothing.SHOES:
      offset = { x: 250, y: 150 };
      break;
    case TypesOfClothing.UNDERWEAR:
      offset = { x: 100, y: 100 };
      break;
    case TypesOfClothing.ACCESSORIES:
      offset = { x: 180, y: 180 };
      break;
  }
  return offset;
};
