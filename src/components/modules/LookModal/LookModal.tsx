import { FC, memo, useEffect, useState } from "react";
import { IonInput, IonLoading } from "@ionic/react";
import { Modal } from "ui";
import { InputChangeEventDetail } from "@ionic/core";
import { IonInputCustomEvent } from "@ionic/core/dist/types/components";
import { LookPanelDragArea } from "./LookPanelDragArea";
import {
  postUserLook,
  selectCloset,
  resetCurrLookData,
  updateUserLook,
  setUserLooks,
} from "redux/slices/closetSlice";
import { selectUser } from "redux/slices/userSlice";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import _uniqueId from "lodash.uniqueid";
import { IClothesArrItem, ILooksPost } from "types/requests";
import { useSelector } from "react-redux";
import { ILookData, ILookDataItem, ILookDataSection } from "types/closet";
import "./LookModal.scss";

export interface LookModalProps {
  setIsLookModalOpen: (status: boolean) => void;
  isLookModalOpen: boolean;
}

export const LookModal: FC<LookModalProps> = memo(
  ({ setIsLookModalOpen, isLookModalOpen }) => {
    const [lookTitle, setLookTitle] = useState<string>("New look");
    const dispatch = useAppDispatch();
    const { currLookData, userLooks } = useSelector(selectCloset);
    const { id, looksList } = useSelector(selectUser);

    const onTitleChange = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
      setLookTitle(e.detail.value as string);
    };

    useEffect(() => {
      if (currLookData.id) {
        setIsLookModalOpen(true);
      }
    }, [currLookData.id]);

    useEffect(() => {
      if (currLookData.name) {
        setLookTitle(currLookData.name);
      } else {
        setLookTitle("New look");
      }
    }, [currLookData.name]);

    const mapLookDataToClosetIdsArr = (data: ILookDataItem) => {
      const res: Array<IClothesArrItem> = [];
      let key: keyof ILookDataItem;
      for (key in data) {
        data[key].forEach((field: ILookDataSection) => {
          res.push({
            id: field.id,
            position: field.position,
            color: field.color,
          });
        });
      }
      return res;
    };

    const onSubmitLook = () => {
      const lookId = currLookData.id || _uniqueId(`look-${looksList.length}`);
      const clothesArr = mapLookDataToClosetIdsArr(currLookData.data);
      const newLookDataPost: ILooksPost = {
        lookId: lookId,
        clothesArr,
        userId: id,
        lookName: lookTitle,
      };

      const newCurrLookData = {} as ILookData;
      Object.assign(newCurrLookData, currLookData);
      newCurrLookData.name = lookTitle;

      if (currLookData.id) {
        dispatch(updateUserLook(newLookDataPost, currLookData.id));
      } else {
        dispatch(postUserLook(newLookDataPost));
      }
      const currLookIndex = userLooks.findIndex(
        (e: ILookData) => e.id === currLookData.id
      );
      dispatch(
        setUserLooks([
          ...userLooks.slice(0, currLookIndex),
          newCurrLookData,
          ...userLooks.slice(currLookIndex + 1, userLooks.length),
        ])
      );

      dispatch(resetCurrLookData());
      setIsLookModalOpen(false);
    };

    const onCancel = () => {
      dispatch(resetCurrLookData());
      setIsLookModalOpen(false);
    };

    return (
      <Modal
        initialBreakpoint={0.5}
        breakpoints={[0, 0.1, 0.5]}
        backdropBreakpoint={0.6}
        backdropDismiss={false}
        handle={true}
        handleBehavior={"cycle"}
        classList={"look-modal"}
        onOk={onSubmitLook}
        onClose={onCancel}
        isOpen={isLookModalOpen}
      >
        <div className={"look-header"}>
          <IonInput
            className={"text bold look-name-input"}
            placeholder={"Type the name"}
            value={lookTitle}
            onIonChange={onTitleChange}
          />
        </div>
        <div className={"look-modal-drag-area-wrapper"}>
          <LookPanelDragArea data={currLookData} />
        </div>
      </Modal>
    );
  }
);
