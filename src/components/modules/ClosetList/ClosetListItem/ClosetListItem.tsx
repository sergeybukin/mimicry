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
  const defaultPosition = [0, 0];

  const onClosetItem = () => {
    const itemWithPosition = { ...data, position: defaultPosition };
    const newLookData = { ...currLookData.data };
    if (data.clothingType === TypesOfClothing.SHOES) {
      newLookData[data.clothingType] = [itemWithPosition];
    } else {
      if (
        !newLookData[data.clothingType].find(
          (e: IClosetDataItem) => e.article === data.article
        )
      ) {
        newLookData[data.clothingType] = [
          ...newLookData[data.clothingType],
          itemWithPosition,
        ];
      }
    }
    dispatch(
      setCurrLookData({
        id: currLookData.id,
        name: currLookData.name,
        data: newLookData,
      })
    );
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
