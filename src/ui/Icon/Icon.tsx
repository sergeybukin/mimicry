import { FC } from "react";
import { icons } from "./icons";
import { IconProps } from "./types";

export const Icon: FC<IconProps> = ({ name, style }) => {
  // @ts-ignore
  const IconComponent = icons[name];
  return (
    <div style={style}>
      <IconComponent />
    </div>
  );
};
