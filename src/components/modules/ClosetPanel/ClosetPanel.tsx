import { ClosetItem } from "./ClosetItem";
import React, { FC, useState } from "react";
import { ClosetItemSettings } from "./ClosetItemSettings";
import { Clothes } from "./types";
import "./ClosetPanel.scss";

export interface ClosetPanelProps {
  page: any;
}
export const ClosetPanel: FC<ClosetPanelProps> = ({ page }) => {
  const [showLookItemSettings, setShowLookItemSettings] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Clothes>(Clothes.BODY);

  const onItemClick = (val: Clothes) => {
    setSelectedItem(val);
    setShowLookItemSettings(true);
  };

  return (
    <div className={"closet-panel"}>
      <ClosetItemSettings
        showLookItemSettings={showLookItemSettings}
        setShowLookItemSettings={setShowLookItemSettings}
        selectedItem={selectedItem}
        page={page}
      />
      <ClosetItem icon={"hat"} onClick={onItemClick} title={Clothes.HEAD} />
      <ClosetItem icon={"coat"} onClick={onItemClick} title={Clothes.BODY} />
      <ClosetItem icon={"pants"} onClick={onItemClick} title={Clothes.FEET} />
      <ClosetItem
        icon={"shoes-woman"}
        onClick={onItemClick}
        title={Clothes.SHOES}
      />
    </div>
  );
};
