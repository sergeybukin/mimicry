import { ILooksResponse } from "types/closetResponse";
import { ILookDataSection, ILookDataItem, ILookData } from "types/closet";

export const mapLooksResponse: (
  data: Array<ILooksResponse>
) => Array<ILookData> = (data) => {
  const res: Array<ILookData> = [];

  const looksList = new Set(data.map((e) => e.looks_id));

  looksList.forEach((look) => {
    const thisLookItems = data.filter((e) => e.looks_id === look);
    const newLook: ILookDataItem = {
      head: [],
      top: [],
      bottom: [],
      shoes: [],
      under: [],
      accs: [],
    };

    thisLookItems.forEach(
      ({
        article,
        clo,
        clothing_type,
        gender,
        icon,
        id,
        looks_id,
        section,
        name,
        clothes_position,
        color,
      }) => {
        const mappedItem: ILookDataSection = {
          article,
          clo,
          gender,
          icon,
          id,
          section,
          color,
          position: clothes_position,
          looksId: looks_id,
          clothingType: clothing_type,
        };
        newLook[mappedItem.clothingType].push(mappedItem);
      }
    );

    res.push({ id: look, name: thisLookItems[0]?.name, data: newLook });
  });

  return res;
};
