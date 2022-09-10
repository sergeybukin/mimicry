import { FC } from "react";
import { icons } from "./icons";
import { IconProps } from "./types";

export const Icon: FC<IconProps> = ({ name, style, classList }) => {
  // @ts-ignore
  const IconComponent = icons[name];
  return (
    <div className={classList || ""} style={style}>
      <IconComponent />
    </div>
  );
};
