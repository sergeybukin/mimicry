import { ILookDataItem, ILookDataSection } from "types/closet";

export interface IMappedLookDataSection extends ILookDataSection {
  itemIndex: number;
}

export const mapLookObjectToArray: (
  look: ILookDataItem
) => Array<IMappedLookDataSection> = (look) => {
  const res: Array<IMappedLookDataSection> = [];
  let key: keyof ILookDataItem;
  for (key in look) {
    look[key].forEach((item: ILookDataSection, i: number) => {
      res.push({ ...item, itemIndex: i });
    });
  }
  return res;
};
