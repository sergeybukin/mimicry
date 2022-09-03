export enum Section {
  ACCESSORIES = "accessories",
  SOCKS = "socks",
  SHOES = "shoes",
  UNDERWEAR = "underwear",
  DRESS = "dress",
  SHORTS = "shorts",
  T_SHIRT = "t-shirt",
  SHIRT = "shirt",
  TOP = "top",
  SKIRT = "skirt",
  SPECIAL = "special",
  TROUSERS = "trousers",
  SPORT = "sport",
  VEST = "vest",
  OUTERWEAR = "outerwear",
}

export interface IClosetDataItem {
  article: string;
  clo: number;
  type: Section;
}

export const closetData: Array<IClosetDataItem> = [
  {
    article: "Metal chair",
    clo: 0.0,
    type: Section.ACCESSORIES,
  },
  {
    article: "Bra",
    clo: 0.01,
    type: Section.ACCESSORIES,
  },
  {
    article: "Ankle socks",
    clo: 0.02,
    type: Section.SOCKS,
  },
  {
    article: "Sandals",
    clo: 0.02,
    type: Section.SHOES,
  },
  {
    article: "Shoes",
    clo: 0.02,
    type: Section.SHOES,
  },
  {
    article: "Panty hose",
    clo: 0.02,
    type: Section.UNDERWEAR,
  },
  {
    article: "Calf length socks",
    clo: 0.03,
    type: Section.SOCKS,
  },
  {
    article: "Women's underwear",
    clo: 0.03,
    type: Section.UNDERWEAR,
  },
  {
    article: "Men's underwear",
    clo: 0.04,
    type: Section.UNDERWEAR,
  },
  {
    article: "Knee socks (thick)",
    clo: 0.06,
    type: Section.SOCKS,
  },
  {
    article: "Short shorts",
    clo: 0.06,
    type: Section.SHORTS,
  },
  {
    article: "Walking shorts",
    clo: 0.08,
    type: Section.SHORTS,
  },
  {
    article: "T-shirt",
    clo: 0.08,
    type: Section.T_SHIRT,
  },
  {
    article: "Boots",
    clo: 0.1,
    type: Section.SHOES,
  },
  {
    article: "Sleeveless scoop-neck blouse",
    clo: 0.12,
    type: Section.TOP,
  },
  {
    article: "Short-sleeve knit shirt",
    clo: 0.17,
    type: Section.SKIRT,
  },
  {
    article: "Sleeveless short gown (thin)",
    clo: 0.18,
    type: Section.DRESS,
  },
  {
    article: "Short-sleeve dress shirt",
    clo: 0.19,
    type: Section.SHIRT,
  },
  {
    article: "Sleeveless long gown (thin)",
    clo: 0.2,
    type: Section.DRESS,
  },
  {
    article: "Long underwear top",
    clo: 0.2,
    type: Section.UNDERWEAR,
  },
  {
    article: "Thick skirt",
    clo: 0.23,
    type: Section.SKIRT,
  },
  {
    article: "Long-sleeve dress shirt",
    clo: 0.25,
    type: Section.SHIRT,
  },
  {
    article: "Long-sleeve flannel shirt",
    clo: 0.34,
    type: Section.SHIRT,
  },
  {
    article: "Long-sleeve sweat shirt",
    clo: 0.34,
    type: Section.SHIRT,
  },
  {
    article: "Long-sleeve long gown",
    clo: 0.46,
    type: Section.DRESS,
  },
  {
    article: "Thin trousers",
    clo: 0.15,
    type: Section.TROUSERS,
  },
  {
    article: "Thick trousers",
    clo: 0.24,
    type: Section.TROUSERS,
  },
  {
    article: "Sweatpants",
    clo: 0.28,
    type: Section.SPORT,
  },
  {
    article: "Overalls",
    clo: 0.49,
    type: Section.SPECIAL,
  },
  {
    article: "Thin skirt",
    clo: 0.14,
    type: Section.SKIRT,
  },
  {
    article: "Long-sleeve shirtdress (thin)",
    clo: 0.33,
    type: Section.DRESS,
  },
  {
    article: "Long-sleeve shirtdress (thick)",
    clo: 0.47,
    type: Section.DRESS,
  },
  {
    article: "Short-sleeve shirtdress",
    clo: 0.29,
    type: Section.DRESS,
  },
  {
    article: "Sleeveless, scoop-neck shirt (thin)",
    clo: 0.23,
    type: Section.SHIRT,
  },
  {
    article: "Sleeveless, scoop-neck shirt (thick)",
    clo: 0.27,
    type: Section.SHIRT,
  },
  {
    article: "Sleeveless vest (thin)",
    clo: 0.13,
    type: Section.VEST,
  },
  {
    article: "Sleeveless vest (thick)",
    clo: 0.22,
    type: Section.VEST,
  },
  {
    article: "Long sleeve shirt (thin)",
    clo: 0.25,
    type: Section.VEST,
  },
  {
    article: "Long sleeve shirt (thick)",
    clo: 0.36,
    type: Section.SHIRT,
  },
  {
    article: "Single-breasted coat (thin)",
    clo: 0.36,
    type: Section.OUTERWEAR,
  },
  {
    article: "Single-breasted coat (thick)",
    clo: 0.44,
    type: Section.OUTERWEAR,
  },
  {
    article: "Double-breasted coat (thin)",
    clo: 0.42,
    type: Section.OUTERWEAR,
  },
  {
    article: "Double-breasted coat (thick)",
    clo: 0.48,
    type: Section.OUTERWEAR,
  },
];
