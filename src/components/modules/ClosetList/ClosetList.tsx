import { FC } from "react";
import { IClosetDataItem } from "types/closet";
import { IonItem, IonList } from "@ionic/react";
import { ClosetListItem } from "./ClosetListItem";
import "./ClosetList.scss";

export interface ClosetListProps {
  data: Array<IClosetDataItem>;
}

export const ClosetList: FC<ClosetListProps> = ({ data }) => {
  if (data.length === 0) {
    return <IonItem className={"text"}>Nothing found</IonItem>;
  }
  const items = data.map((e) => <ClosetListItem key={e.id} data={e} />);

  return <IonList className={"closet-list"}>{items}</IonList>;
};
