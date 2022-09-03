import React, { useState } from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { ClosetList } from "components/modules/ClosetList/ClosetList";
import { closetData } from "assets/comfort/closetData";
import { Gender } from "types/user";
import { IClosetDataItem, IClosetSection, Section } from "types/closet";
import { ClosetPageToolbar } from "components/modules/ClosetPageToolbar";
import { LookPanel } from "components/modules/LookPanel";
import "./ClosetPage.scss";

export const ClosetPage = () => {
  const [segmentFilterValue, setSegmentFilterValue] = useState<Gender>(
    Gender.MEN
  );

  const [sectionFilterValue, setSectionFilterValue] = useState<Section>(
    Section.ALL
  );

  const segmentFilter = (item: IClosetDataItem | IClosetSection) =>
    item.gender === segmentFilterValue || item.gender === Gender.UNISEX;
  const sectionFilter = (item: IClosetDataItem) => {
    if (sectionFilterValue === Section.ALL) {
      return true;
    } else {
      return item.section === sectionFilterValue;
    }
  };

  const filteredData = closetData.filter(
    (item: IClosetDataItem) => segmentFilter(item) && sectionFilter(item)
  );

  return (
    <IonPage className={"closet-page"}>
      <IonHeader>
        <ClosetPageToolbar
          setSegmentFilterValue={setSegmentFilterValue}
          setSectionFilterValue={setSectionFilterValue}
          segmentFilter={segmentFilter}
        />
      </IonHeader>
      <IonContent>
        <ClosetList data={filteredData} />
      </IonContent>
      <LookPanel />
    </IonPage>
  );
};
