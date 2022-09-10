import React, { FC, memo, useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { IClosetDataItem } from "types/closet";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { removeCurrLookItem } from "redux/slices/closetSlice";
import "./DragItemWrapper.scss";

export interface DragItemWrapperProps {
  defaultPosition: { x: number; y: number };
  onClick: (article: string) => void;
  isActive: boolean;
  data: IClosetDataItem;
}

export const DragItemWrapper: FC<DragItemWrapperProps> = memo(
  ({ children, defaultPosition, onClick, isActive, data }) => {
    const dispatch = useAppDispatch();
    const [isTrashing, setIsTrashing] = useState(false);
    const [removingItem, setRemovingItem] = useState<Array<string>>([]);

    const removeItem = (clothingType: string, article: string) => {
      setRemovingItem([clothingType, article]);
    };

    useEffect(() => {
      if (removingItem.length > 0) {
        dispatch(
          removeCurrLookItem({
            clothingType: removingItem[0],
            article: removingItem[1],
          })
        );
      }
    }, [removingItem]);

    const onStop = (e: DraggableEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (isTrashing) {
        onClick("");
        removeItem(data.clothingType, data.article);
      }
    };

    const onDrag = (e: DraggableEvent, data: DraggableData) => {
      if (data.x < 50 && data.y > 150) {
        setIsTrashing(true);
      } else {
        setIsTrashing(false);
      }
    };

    const onDragStart = (e: DraggableEvent) => {
      e.stopPropagation();
      onClick(data.article);
    };

    return (
      <Draggable
        axis="both"
        handle={".drag-item"}
        defaultPosition={defaultPosition}
        grid={[1, 1]}
        scale={1}
        bounds={"parent"}
        onStop={onStop}
        onStart={onDragStart}
        onDrag={onDrag}
      >
        <div className={`drag-item ${isActive ? "active" : ""}`}>
          <div className={`wrapper ${isTrashing ? "trashing" : ""}`}>
            {children}
          </div>
        </div>
      </Draggable>
    );
  },
  (prev, curr) => prev.isActive === curr.isActive
);
