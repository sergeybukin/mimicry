import React, { FC, useMemo, useState } from "react";
import { IonInput } from "@ionic/react";
import { Modal } from "ui";
import { LookItem } from "./LookItem";
import { InputChangeEventDetail } from "@ionic/core";
import { IonInputCustomEvent } from "@ionic/core/dist/types/components";
import { useSelector } from "react-redux";
import { selectCloset } from "redux/slices/closetSlice";
import "./LookPanel.scss";

export interface ClosetPanelProps {}

export const LookPanel: FC<ClosetPanelProps> = () => {
  const { currLookData } = useSelector(selectCloset);

  const [lookTitle, setLookTitle] = useState<string>("New look");

  const onItemClick = (val: any) => {
    console.log(val);
  };

  const onTitleChange = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
    setLookTitle(e.detail.value as string);
  };

  const lookItems = useMemo(() => {
    const res = [];
    for (let key in currLookData) {
      res.push(
        <LookItem key={key} onClick={onItemClick} data={currLookData[key]} />
      );
    }
    return res;
  }, [currLookData]);

  const onSubmitLook = () => {};

  return (
    <Modal
      initialBreakpoint={0.5}
      breakpoints={[0, 0.3, 0.5]}
      backdropDismiss={false}
      backdropBreakpoint={0.6}
      classList={"look-panel"}
      trigger="open-look-panel-modal"
      onOk={onSubmitLook}
    >
      <div className={"look-header"}>
        <IonInput
          className={"title small"}
          placeholder={"Type the name"}
          value={lookTitle}
          onIonChange={onTitleChange}
        />
      </div>
      <div className={"look-items-wrapper"}>{lookItems}</div>
    </Modal>
  );
};
