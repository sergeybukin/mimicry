export interface IClothesArrItem {
  id: string;
  position: Array<number>;
  color: string;
}
export interface ILooksPost {
  lookId: string;
  clothesArr: Array<IClothesArrItem>;
  userId?: string;
  lookName: string;
}
