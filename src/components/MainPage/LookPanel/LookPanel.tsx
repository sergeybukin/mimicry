import { LookItem } from "./LookItem";
import React, { useState } from "react";
import { LookItemSettings } from "./LookItemSettings";
import { Clothes } from "./types";
import "./LookPanel.scss";

export const LookPanel = () => {
  const [showLookItemSettings, setShowLookItemSettings] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Clothes>(Clothes.BODY);

  const onItemClick = (val: Clothes) => {
    setSelectedItem(val);
    setShowLookItemSettings(true);
  };

  return (
    <div className={"look-panel"}>
      <LookItemSettings
        showLookItemSettings={showLookItemSettings}
        setShowLookItemSettings={setShowLookItemSettings}
        selectedItem={selectedItem}
      />
      <LookItem icon={"hat"} onClick={onItemClick} title={Clothes.HEAD} />
      <LookItem icon={"coat"} onClick={onItemClick} title={Clothes.BODY} />
      <LookItem icon={"pants"} onClick={onItemClick} title={Clothes.FEET} />
      <LookItem
        icon={"shoes-woman"}
        onClick={onItemClick}
        title={Clothes.SHOES}
      />
    </div>
  );
};
