import { icons } from "./icons";

export type IconsType = typeof icons;
export type IconNamesType = keyof IconsType;

export type IconProps = {
  classList?: string;
  name: IconNamesType;
  style?: CSS.Properties;
};
