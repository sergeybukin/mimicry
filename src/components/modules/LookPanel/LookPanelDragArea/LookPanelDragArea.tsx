import React, { useMemo, FC, useState, ReactNode } from "react";
import { IClosetDataItem } from "types/closet";
import { DragItemWrapper } from "components/modules/DragItemWrapper";
import { useSelector } from "react-redux";
import { selectCloset } from "redux/slices/closetSlice";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import {
  calculateFontSize,
  calculateOffset,
} from "../utils/lookItemStylesUtils";
import "./LookPanelDragArea.scss";

export interface LookPanelDragAreaProps {}

export const LookPanelDragArea: FC<LookPanelDragAreaProps> = () => {
  const { currLookData } = useSelector(selectCloset);
  const [activeItem, setActiveItem] = useState<string>("");

  const lookItems = useMemo(() => {
    const res: Array<ReactNode> = [];
    for (let key in currLookData) {
      currLookData[key].forEach((item: IClosetDataItem, i: number) => {
        const defaultPosition = calculateOffset(item.clothingType, i);

        res.push(
          <DragItemWrapper
            key={item.article}
            isActive={item.article === activeItem}
            defaultPosition={defaultPosition}
            onClick={setActiveItem}
            data={item}
            children={
              <span
                style={{ fontSize: calculateFontSize(item.clothingType) }}
                className={`icon-${item.icon}`}
              />
            }
          />
        );
      });
    }
    return res;
  }, [currLookData, activeItem]);

  return (
    <div className={"drag-area"}>
      {lookItems}
      <div className={"trash-zone"}>
        <IonIcon icon={trash} />
      </div>
    </div>
  );
};
