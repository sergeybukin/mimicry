import React, { FC, RefObject, useMemo } from "react";
import { ILookData } from "types/closet";
import { mapLookObjectToArray } from "redux/mappers/mapLookObjectToArray";
import { calculateClothesStyles } from "components/modules/LookModal/utils/lookItemStylesUtils";
import { useContainerDimensions } from "utils/hooks/useContainerDimensions";
import "./LookCard.scss";

export interface LookCardProps {
  data: ILookData;
  containerRef: RefObject<HTMLInputElement>;
}

export const LookCard: FC<LookCardProps> = ({ data, containerRef }) => {
  const mappedLookData = mapLookObjectToArray(data.data);
  const lookAreaSize = useContainerDimensions(containerRef);

  const lookCard = useMemo(
    () =>
      mappedLookData.map((lookItem) => {
        const { fontSize } = calculateClothesStyles(
          lookItem.clothingType,
          lookItem.section,
          lookAreaSize.height
        );
        const left = (lookItem.position[0] * lookAreaSize.width) / 100;
        const top = (lookItem.position[1] * lookAreaSize.height) / 100;

        return (
          <span
            key={lookItem.id}
            style={{
              position: "absolute",
              fontSize: `${fontSize}px`,
              color: lookItem.color,
              left: left,
              top: top,
            }}
            className={`icon-${lookItem.icon}`}
          />
        );
      }),
    [mappedLookData, lookAreaSize]
  );

  return (
    <>
      <div className={"look-grid-wrapper"}>{lookCard}</div>
    </>
  );
};
