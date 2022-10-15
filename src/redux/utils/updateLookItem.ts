import {
  ILookData,
  ILookDataItem,
  ILookDataSection,
  TypesOfClothing,
} from "types/closet";

export const updateLookItem = (item: ILookDataSection, data: ILookData) => {
  const newData: ILookDataItem = {
    head: [],
    top: [],
    bottom: [],
    shoes: [],
    under: [],
    accs: [],
  };
  Object.assign(newData, data.data);
  newData[item.clothingType as TypesOfClothing] = newData[
    item.clothingType as TypesOfClothing
  ].map((e) => {
    if (e.id === item.id) {
      return item;
    } else {
      return e;
    }
  });
  return { id: data.id, name: data.name, data: newData };
};
