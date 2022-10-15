import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { IonButtons, IonIcon, IonSearchbar, IonToolbar } from "@ionic/react";
import { Select } from "ui";
import { Button, Segment } from "ui";
import { useHistory } from "react-router";
import { ButtonColors } from "ui/Button/types";
import { Gender } from "types/user";
import { folderOpenOutline } from "ionicons/icons";
import { IClosetSection, Section } from "types/closet";
import "./ClosetPageToolbar.scss";

const segments = [
  { label: "Men", value: Gender.MEN },
  { label: "Women", value: Gender.WOMEN },
];

const sections: Array<IClosetSection> = [
  { value: Section.ALL, label: "All", gender: Gender.UNISEX },
  { value: Section.SOCKS, label: "Socks", gender: Gender.UNISEX },
  { value: Section.HAT, label: "Hat", gender: Gender.UNISEX },
  { value: Section.SHOES, label: "Shoes", gender: Gender.UNISEX },
  { value: Section.UNDERWEAR, label: "Underwear", gender: Gender.UNISEX },
  { value: Section.DRESS, label: "Dress", gender: Gender.WOMEN },
  { value: Section.SHORTS, label: "Shorts", gender: Gender.UNISEX },
  { value: Section.T_SHIRT, label: "T-shirt", gender: Gender.UNISEX },
  { value: Section.SHIRT, label: "Shirt", gender: Gender.UNISEX },
  { value: Section.TOP, label: "Top", gender: Gender.UNISEX },
  { value: Section.SKIRT, label: "Skirt", gender: Gender.WOMEN },
  { value: Section.SPECIAL, label: "Special", gender: Gender.UNISEX },
  { value: Section.TROUSERS, label: "Trousers", gender: Gender.UNISEX },
  { value: Section.SPORT, label: "Sport", gender: Gender.UNISEX },
  { value: Section.OUTERWEAR, label: "Outerwear", gender: Gender.UNISEX },
];

export interface ClosetPageToolbarProps {
  setSegmentFilterValue: Dispatch<SetStateAction<Gender>>;
  setSectionFilterValue: Dispatch<SetStateAction<Section>>;
  segmentFilter: (value: IClosetSection) => boolean;
  setIsLookModalOpen: (status: boolean) => void;
}

export const ClosetPageToolbar: FC<ClosetPageToolbarProps> = ({
  setSegmentFilterValue,
  setSectionFilterValue,
  segmentFilter,
  setIsLookModalOpen,
}) => {
  const history = useHistory();
  const onSegmentsChange = useCallback((value: Gender) => {
    setSegmentFilterValue(value);
  }, []);

  const onSelectChange = (value: Section) => {
    setSectionFilterValue(value);
  };

  const onOpenLooksList = () => {
    history.push("closet/looks");
  };

  const onOpenLookModal = () => setIsLookModalOpen(true);

  const availableSections = sections.filter(segmentFilter);

  return (
    <>
      <IonToolbar>
        <IonSearchbar className={"closet-searchbar"} />
        <IonButtons slot={"end"}>
          <Select
            classList={"select-section"}
            placeholder={"Select section"}
            defaultValue={"all"}
            onChange={onSelectChange}
            options={availableSections}
            listClass={"sections-list"}
          />
        </IonButtons>
      </IonToolbar>
      <IonToolbar>
        <IonButtons slot={"start"}>
          <Button
            label={"+"}
            color={ButtonColors.DARK}
            styles={{ width: "10vw" }}
            onClick={onOpenLookModal}
          />
        </IonButtons>
        <Segment
          segments={segments}
          onChange={onSegmentsChange}
          classList={"select-gender"}
          defaultValue={Gender.MEN}
        />
        <IonButtons slot={"end"}>
          <Button
            onClick={onOpenLooksList}
            color={ButtonColors.DARK}
            styles={{ width: "10vw" }}
          >
            <IonIcon icon={folderOpenOutline} />
          </Button>
        </IonButtons>
      </IonToolbar>
    </>
  );
};
