import { FC } from "react";
import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import { IClosetDataItem, TypesOfClothing } from "types/closet";
import { useDispatch, useSelector } from "react-redux";
import { selectCloset, setCurrLookData } from "redux/slices/closetSlice";
import "./ClosetListItem.scss";

export interface ClosetListItemProps {
  data: IClosetDataItem;
}

export const ClosetListItem: FC<ClosetListItemProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { currLookData } = useSelector(selectCloset);

  const onClosetItem = () => {
    const newData = { ...currLookData };
    if (data.clothingType === TypesOfClothing.SHOES) {
      newData[data.clothingType] = [data];
    } else {
      if (
        !newData[data.clothingType].find(
          (e: IClosetDataItem) => e.article === data.article
        )
      ) {
        newData[data.clothingType] = [...newData[data.clothingType], data];
      }
    }
    dispatch(setCurrLookData(newData));
  };

  return (
    <IonCard onClick={onClosetItem} button className={"closet-list-item"}>
      <span className={`icon-${data.icon}`} />
      <IonCardHeader>
        <IonCardSubtitle className={"text small"}>
          {data.article}
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
