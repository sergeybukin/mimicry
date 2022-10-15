import {
  IClosetDataItem,
  ILookData,
  ILookDataItem,
  TypesOfClothing,
} from "types/closet";

export const removeLookItem = (item: IClosetDataItem, data: ILookData) => {
  const newData: ILookDataItem = {
    head: [],
    top: [],
    bottom: [],
    shoes: [],
    under: [],
    accs: [],
  };
  Object.assign(newData, data.data);
  Object.assign(newData, data.data);
  newData[item.clothingType as TypesOfClothing] = newData[
    item.clothingType as TypesOfClothing
  ].filter((e) => e.id !== item.id);
  return { id: data.id, name: data.name, data: newData };
};
