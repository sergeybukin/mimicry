export interface IUTCIscaleItem {
  description: string;
  range: Array<number>;
  color: string;
  icon: string;
}
export const utciScale: Array<IUTCIscaleItem> = [
  {
    description: "extreme heat stress",
    range: [46, 300],
    color: "#E97A99",
    icon: "bad",
  },
  {
    description: "very strong heat stress",
    range: [38, 46],
    color: "#EFA184",
    icon: "bad",
  },
  {
    description: "strong heat stress",
    range: [32, 38],
    color: "#F5C172",
    icon: "bad",
  },
  {
    description: "moderate heat stress",
    range: [26, 32],
    color: "#F8D965",
    icon: "bad",
  },
  {
    description: "no thermal stress",
    range: [9, 26],
    color: "#c2e59c",
    icon: "good",
  },
  {
    description: "slight cold stress",
    range: [0, 9],
    color: "#B4E7D7",
    icon: "bad",
  },
  {
    description: "moderate cold stress",
    range: [-13, 0],
    color: "#88C2C9",
    icon: "bad",
  },
  {
    description: "strong cold stress",
    range: [-27, -13],
    color: "#78B0B3",
    icon: "bad",
  },
  {
    description: "very strong cold stress",
    range: [-40, -27],
    color: "#588A9B",
    icon: "bad",
  },
  {
    description: "extreme cold stress",
    range: [-40, -300],
    color: "#396784",
    icon: "bad",
  },
];
