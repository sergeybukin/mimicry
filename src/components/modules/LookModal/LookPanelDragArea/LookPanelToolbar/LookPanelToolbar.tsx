import React, { FC, useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonPopover } from "@ionic/react";
import { arrowUndoCircle, colorPaletteOutline, trash } from "ionicons/icons";
import { HexColorPicker } from "react-colorful";
import { ILookDataSection } from "types/closet";
import { updateCurrLookItem } from "redux/slices/closetSlice";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { useDebounce } from "utils/hooks/useDebounce";
import "./LookPanelToolbar.scss";

export interface LookPanelToolbarProps {
  activeItem: ILookDataSection;
}
export const LookPanelToolbar: FC<LookPanelToolbarProps> = ({ activeItem }) => {
  const [selectedColor, setSelectedColor] = useState("#aabbcc");
  const dispatch = useAppDispatch();
  const onColorChanged = (color: string) => {
    setSelectedColor(color);
  };

  const newColor = useDebounce(selectedColor, 300);

  useEffect(() => {
    if (activeItem.id) {
      const newData = {} as ILookDataSection;
      Object.assign(newData, activeItem);
      newData.color = newColor;
      dispatch(updateCurrLookItem(newData));
    }
  }, [newColor]);

  return (
    <div className={"look-panel-toolbar"}>
      <IonButton id={"color-picker-btn"} className={"look-panel-toolbar-item"}>
        <IonIcon icon={colorPaletteOutline} />
      </IonButton>
      <div className={"look-panel-toolbar-item"}>
        <IonIcon icon={trash} />
      </div>
      <IonPopover
        side={"top"}
        arrow={false}
        trigger="color-picker-btn"
        dismissOnSelect={true}
        className={"color-picker-popover"}
      >
        <IonContent>
          <HexColorPicker color={selectedColor} onChange={onColorChanged} />
        </IonContent>
      </IonPopover>
      <div className={"look-panel-toolbar-item"}>
        <IonIcon icon={arrowUndoCircle} />
      </div>
    </div>
  );
};
