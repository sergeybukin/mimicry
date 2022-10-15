import { Section, TypesOfClothing } from "types/closet";

export const calculateClothesStyles = (
  clothingType: TypesOfClothing,
  section: Section,
  containerHeight: number
) => {
  let fontSize = containerHeight - containerHeight / 4;
  let zIndex = 1;
  switch (clothingType) {
    case TypesOfClothing.HEAD:
      fontSize = fontSize / 3;
      break;
    case TypesOfClothing.TOP:
      if (section === Section.OUTERWEAR) {
        zIndex = 20;
      } else {
        fontSize = fontSize / 1.2;
      }
      break;
    case TypesOfClothing.BOTTOM:
      fontSize = fontSize / 1.4;
      break;
    case TypesOfClothing.SHOES:
      fontSize = fontSize / 2.5;
      break;
    case TypesOfClothing.UNDERWEAR:
      fontSize = fontSize / 4;
      break;
    case TypesOfClothing.ACCESSORIES:
      fontSize = fontSize / 4;
      break;
  }
  return { fontSize, zIndex };
};

export const calculateOffset = (clothingType: TypesOfClothing, i: number) => {
  let offset = { x: 0, y: 0 };
  switch (clothingType) {
    case TypesOfClothing.HEAD:
      offset = { x: 10, y: 10 };
      break;
    case TypesOfClothing.TOP:
      offset = { x: 20, y: 10 };
      break;
    case TypesOfClothing.BOTTOM:
      offset = { x: 30, y: 10 };
      break;
    case TypesOfClothing.SHOES:
      offset = { x: 10, y: 50 };
      break;
    case TypesOfClothing.UNDERWEAR:
      offset = { x: 20, y: 50 };
      break;
    case TypesOfClothing.ACCESSORIES:
      offset = { x: 30, y: 50 };
      break;
  }
  return offset;
};
