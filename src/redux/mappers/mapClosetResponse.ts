import { IClosetResponse } from "types/closetResponse";
import { IClosetDataItem } from "types/closet";

export const mapClosetResponse: (data: IClosetResponse) => IClosetDataItem = (
  data
) => {
  const { clothing_type, id, article, clo, section, gender, icon } = data;
  return {
    clothingType: clothing_type,
    id,
    article,
    clo,
    section,
    gender,
    icon,
  };
};
