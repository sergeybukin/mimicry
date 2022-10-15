import React, { FC, memo, useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { IClosetDataItem, ILookDataSection } from "types/closet";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import {
  removeCurrLookItem,
  updateCurrLookItem,
} from "redux/slices/closetSlice";
import { calculatePercentage } from "utils/calculatePercentage";
import CSS from "csstype";
import { IContainerDimensions } from "utils/hooks/useContainerDimensions";
import "./DragItemWrapper.scss";

export interface IDragItemPosition {
  x: number;
  y: number;
}
export interface DragItemWrapperProps {
  defaultPosition: IDragItemPosition;
  onClick: (item: ILookDataSection) => void;
  data: ILookDataSection;
  styles?: CSS.Properties;
  lookAreaSize: IContainerDimensions;
  isActive: boolean;
}

export const DragItemWrapper: FC<DragItemWrapperProps> = memo(
  ({
    children,
    defaultPosition,
    onClick,
    isActive,
    data,
    styles,
    lookAreaSize,
  }) => {
    const dispatch = useAppDispatch();

    const [isTrashing, setIsTrashing] = useState(false);
    const [removingItem, setRemovingItem] = useState<IClosetDataItem | null>(
      null
    );

    const [elPosition, setElPosition] =
      useState<IDragItemPosition>(defaultPosition);
    const removeItem = (item: IClosetDataItem) => {
      setRemovingItem(item);
    };

    useEffect(() => {
      const defaultPosition = {
        x: (data.position[0] * lookAreaSize.width) / 100,
        y: (data.position[1] * lookAreaSize.height) / 100,
      };
      setElPosition(defaultPosition);
    }, [lookAreaSize]);

    useEffect(() => {
      if (removingItem) {
        dispatch(removeCurrLookItem(data));
      }
    }, [removingItem]);

    const onStop = (e: DraggableEvent, dragData: DraggableData) => {
      e.stopPropagation();
      e.preventDefault();

      if (isTrashing) {
        onClick({} as ILookDataSection);
        removeItem(data);
      } else {
        const newData = {} as ILookDataSection;
        Object.assign(newData, data);
        const thisEl = e.target as HTMLElement;
        let x = 0;
        let y = 0;
        if (thisEl) {
          x = dragData.x;
          y = dragData.y;
          if (lookAreaSize.height - thisEl.offsetHeight < dragData.y) {
            y = lookAreaSize.height - thisEl.offsetHeight;
            setElPosition({ x: dragData.x, y: y });
          } else {
            setElPosition({ x: dragData.x, y: dragData.y });
          }
        }
        newData.position = [
          calculatePercentage(x, lookAreaSize.width),
          calculatePercentage(y, lookAreaSize.height),
        ];
        dispatch(updateCurrLookItem(newData));
      }
    };

    const onDrag = (e: DraggableEvent, dragData: DraggableData) => {
      const { x, y } = dragData;
      const { width, height } = lookAreaSize;
      const { offsetHeight, offsetWidth } = e.target as HTMLElement;
      const condition =
        x > width / 2 - offsetWidth / 2 - 10 &&
        x < width / 2 - offsetWidth / 4 &&
        y > height - offsetHeight / 2;

      if (condition) {
        setIsTrashing(true);
      } else {
        setIsTrashing(false);
      }
    };

    const onDragStart = (e: DraggableEvent) => {
      e.stopPropagation();
      onClick(data);
    };

    return (
      <Draggable
        axis="both"
        handle={".drag-item"}
        position={elPosition}
        grid={[1, 1]}
        scale={1}
        bounds={"parent"}
        onStop={onStop}
        onStart={onDragStart}
        onDrag={onDrag}
      >
        <div style={styles} className={`drag-item ${isActive ? "active" : ""}`}>
          <div className={`wrapper ${isTrashing ? "trashing" : ""}`}>
            {children}
          </div>
        </div>
      </Draggable>
    );
  },
  (prev, curr) =>
    prev.isActive === curr.isActive &&
    prev.data.color === curr.data.color &&
    curr.defaultPosition === prev.defaultPosition &&
    prev.lookAreaSize === curr.lookAreaSize
);
