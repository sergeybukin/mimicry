import React, { FC, useState } from "react";
import { IonInput } from "@ionic/react";
import { Modal } from "ui";
import { InputChangeEventDetail } from "@ionic/core";
import { IonInputCustomEvent } from "@ionic/core/dist/types/components";
import { LookPanelDragArea } from "./LookPanelDragArea";
import { postUserLook, selectCloset } from "redux/slices/closetSlice";
import { selectUser } from "redux/slices/userSlice";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import _uniqueId from "lodash.uniqueid";
import { ILooksPost } from "types/requests";
import { useSelector } from "react-redux";
import { IClosetDataItem, ILookDataItem } from "types/closet";
import "./LookPanel.scss";

export interface ClosetPanelProps {}

export const LookPanel: FC<ClosetPanelProps> = () => {
  const [lookTitle, setLookTitle] = useState<string>("New look");
  const { currLookData } = useSelector(selectCloset);
  const { id, looksList } = useSelector(selectUser);

  const dispatch = useAppDispatch();
  const onTitleChange = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
    setLookTitle(e.detail.value as string);
  };

  const mapLookDataToClosetIdsArr = (data: ILookDataItem) => {
    const res: Array<string> = [];
    let key: keyof ILookDataItem;
    for (key in data) {
      data[key].forEach((field: IClosetDataItem) => {
        res.push(field.id);
      });
    }
    return res;
  };

  const onSubmitLook = () => {
    const lookId = _uniqueId(`look-${looksList.length}`);
    const closetIdsArr = mapLookDataToClosetIdsArr(currLookData);

    const newLookData: ILooksPost = {
      lookId,
      closetIdsArr,
      userId: id,
      lookName: lookTitle,
    };
    dispatch(postUserLook(newLookData));
  };

  return (
    <Modal
      initialBreakpoint={0.5}
      breakpoints={[0, 0.3, 0.5]}
      backdropBreakpoint={0.6}
      backdropDismiss={false}
      handle={true}
      handleBehavior={"cycle"}
      classList={"look-panel"}
      trigger="open-look-panel-modal"
      onOk={onSubmitLook}
    >
      <div className={"look-header"}>
        <IonInput
          className={"text bold look-name-input"}
          placeholder={"Type the name"}
          value={lookTitle}
          onIonChange={onTitleChange}
        />
      </div>
      <LookPanelDragArea />
    </Modal>
  );
};
