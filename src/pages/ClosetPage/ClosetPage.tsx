import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonLoading, IonPage } from "@ionic/react";
import { ClosetList } from "components/modules/ClosetList/ClosetList";
import { Gender } from "types/user";
import { IClosetDataItem, IClosetSection, Section } from "types/closet";
import { ClosetPageToolbar } from "components/modules/ClosetPageToolbar";
import { LookModal } from "components/modules/LookModal";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getClosetData, selectCloset } from "redux/slices/closetSlice";
import "./ClosetPage.scss";

export const ClosetPage = () => {
  const { closetData, closetLoading } = useSelector(selectCloset);
  const dispatch = useAppDispatch();

  const [segmentFilterValue, setSegmentFilterValue] = useState<Gender>(
    Gender.MEN
  );
  const [sectionFilterValue, setSectionFilterValue] = useState<Section>(
    Section.ALL
  );

  const [searchValue, setSearchValue] = useState<string>("");
  const [isLookModalOpen, setIsLookModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getClosetData());
  }, []);

  const segmentFilter = (item: IClosetDataItem | IClosetSection) =>
    item.gender === segmentFilterValue || item.gender === Gender.UNISEX;

  const sectionFilter = (item: IClosetDataItem) => {
    if (sectionFilterValue === Section.ALL) {
      return true;
    } else {
      return item.section === sectionFilterValue;
    }
  };

  const searchBarFilter = (item: IClosetDataItem) =>
    item.article.toLowerCase().includes(searchValue.toLowerCase());

  const filteredData = closetData.filter(
    (item: IClosetDataItem) =>
      segmentFilter(item) && sectionFilter(item) && searchBarFilter(item)
  );

  return (
    <IonPage className={"closet-page"}>
      {closetLoading ? (
        <IonLoading isOpen={closetLoading} />
      ) : (
        <>
          <IonHeader>
            <ClosetPageToolbar
              setSegmentFilterValue={setSegmentFilterValue}
              setSectionFilterValue={setSectionFilterValue}
              segmentFilter={segmentFilter}
              setIsLookModalOpen={setIsLookModalOpen}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          </IonHeader>
          <IonContent>
            <ClosetList data={filteredData} />
          </IonContent>
          <LookModal
            isLookModalOpen={isLookModalOpen}
            setIsLookModalOpen={setIsLookModalOpen}
          />
        </>
      )}
    </IonPage>
  );
};
