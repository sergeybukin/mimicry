import React, { useMemo, FC, useState, ReactNode, useRef } from "react";
import { ILookData, ILookDataItem, ILookDataSection } from "types/closet";
import { DragItemWrapper } from "components/modules/LookModal/LookPanelDragArea/DragItemWrapper";
import { LookPanelToolbar } from "components/modules/LookModal/LookPanelDragArea/LookPanelToolbar";
import {
  calculateClothesStyles,
  calculateOffset,
} from "../utils/lookItemStylesUtils";
import { useOutsideClickHandler } from "utils/hooks/useOutsideClickHandler";
import { useContainerDimensions } from "utils/hooks/useContainerDimensions";
import {
  IMappedLookDataSection,
  mapLookObjectToArray,
} from "redux/mappers/mapLookObjectToArray";
import "./LookPanelDragArea.scss";

export interface LookPanelDragAreaProps {
  data: ILookData;
}

export const LookPanelDragArea: FC<LookPanelDragAreaProps> = ({ data }) => {
  const [activeItem, setActiveItem] = useState<ILookDataSection>(
    {} as ILookDataSection
  );

  const onOutside = () => {
    setActiveItem({} as ILookDataSection);
  };

  const dragItemRef = useRef(null);
  const toolbarRef = useRef(null);
  useOutsideClickHandler([dragItemRef, toolbarRef], onOutside);

  const dragAreaRef = useRef(null);
  const lookAreaSize = useContainerDimensions(dragAreaRef);

  const lookItems = useMemo(() => {
    const mappedData: Array<IMappedLookDataSection> = mapLookObjectToArray(
      data.data
    );

    const res: Array<ReactNode> = [];
    mappedData.forEach((item: IMappedLookDataSection) => {
      const defaultPosition = item.position
        ? { x: item.position[0], y: item.position[1] }
        : calculateOffset(item.clothingType, item.itemIndex);

      const { fontSize, zIndex } = calculateClothesStyles(
        item.clothingType,
        item.section,
        lookAreaSize.height
      );

      res.push(
        <DragItemWrapper
          key={item.article}
          isActive={item.id === activeItem.id}
          defaultPosition={defaultPosition}
          styles={{ zIndex: zIndex }}
          onClick={setActiveItem}
          lookAreaSize={lookAreaSize}
          data={item}
          children={
            <span
              ref={dragItemRef}
              style={{
                fontSize: `${fontSize}px`,
                color: item.color,
              }}
              className={`icon-${item.icon}`}
            />
          }
        />
      );
    });
    return res;
  }, [data, activeItem, lookAreaSize]);

  return (
    <div className={"drag-area"}>
      {lookItems}
      <div ref={dragAreaRef} className={"drag-area-border"} />
      <div ref={toolbarRef}>
        <LookPanelToolbar activeItem={activeItem} />
      </div>
    </div>
  );
};
