import { FC } from "react";
import { Button, ButtonProps } from "ui";

export interface IconButtonProps extends ButtonProps {}

export const IconButton: FC<IconButtonProps> = ({ className, ...props }) => {
  return <Button className={"icon-btn " + className} {...props} />;
};
