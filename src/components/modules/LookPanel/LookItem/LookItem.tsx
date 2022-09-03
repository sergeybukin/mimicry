import { FC } from "react";
import { IonChip, IonAvatar, IonLabel } from "@ionic/react";
import { IClosetDataItem } from "types/closet";
import "./LookItem.scss";

export interface ClosetItemProps {
  onClick: (val: any) => void;
  data: Array<IClosetDataItem>;
}

export const LookItem: FC<ClosetItemProps> = ({ onClick, data }) => {
  const iconsList = data.map((item: IClosetDataItem, i: number) => (
    <span
      style={{ position: "absolute", top: `${15 * i}%`, left: `${15 * i}%` }}
      className={`icon-${item.icon}`}
    />
  ));

  const onItemClick = () => {
    onClick(data);
  };

  return (
    <div className={"closet-item-wrapper"}>
      <IonLabel className={"text"}>{data[0].clothingType}</IonLabel>
      <IonChip onClick={onItemClick} className={"closet-item"}>
        <IonAvatar>
          {data.length === 1 ? (
            <span className={`icon-${data[0].icon}`} />
          ) : (
            iconsList
          )}
        </IonAvatar>
      </IonChip>
    </div>
  );
};
