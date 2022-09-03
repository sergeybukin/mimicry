import { Section, TypesOfClothing } from "../types/closet";
import { Gender } from "../types/user";
import { Icomoon } from "../types/icomoon";

export const initialClosetData = {
  head: [
    {
      article: "Cap",
      clo: 0.01,
      section: Section.HAT,
      gender: Gender.UNISEX,
      icon: Icomoon.CAP,
      clothingType: TypesOfClothing.HEAD,
    },
  ],
  top: [
    {
      article: "Double-breasted coat (thick)",
      clo: 0.48,
      section: Section.OUTERWEAR,
      gender: Gender.UNISEX,
      icon: Icomoon.SINGLE_BREASTED_COAT_THICK,
      clothingType: TypesOfClothing.TOP,
    },
  ],
  bottom: [
    {
      article: "Thin trousers",
      clo: 0.15,
      section: Section.TROUSERS,
      gender: Gender.UNISEX,
      icon: Icomoon.THIN_TROUSERS,
      clothingType: TypesOfClothing.BOTTOM,
    },
  ],
  shoes: [
    {
      article: "Shoes",
      clo: 0.02,
      section: Section.SHOES,
      gender: Gender.UNISEX,
      icon: Icomoon.SHOES,
      clothingType: TypesOfClothing.SHOES,
    },
  ],
  accs: [
    {
      article: "Knee socks (thick)",
      clo: 0.06,
      section: Section.SOCKS,
      gender: Gender.UNISEX,
      icon: Icomoon.KNEE_SOCKS_THICK,
      clothingType: TypesOfClothing.ACCESSORIES,
    },
  ],
  under: [
    {
      article: "Men's underwear",
      clo: 0.04,
      section: Section.UNDERWEAR,
      gender: Gender.MEN,
      icon: Icomoon.MENS_UNDERWEAR,
      clothingType: TypesOfClothing.UNDERWEAR,
    },
  ],
};
