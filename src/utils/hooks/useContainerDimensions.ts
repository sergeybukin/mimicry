import { RefObject, useEffect, useState } from "react";

export interface IContainerDimensions {
  width: number;
  height: number;
}
export const useContainerDimensions = (myRef: RefObject<HTMLInputElement>) => {
  const getDimensions = () => ({
    width: parseInt(window.getComputedStyle(myRef.current as Element).width),
    height: parseInt(window.getComputedStyle(myRef.current as Element).height),
  });

  const [dimensions, setDimensions] = useState<IContainerDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions() as IContainerDimensions);
    };
    if (myRef.current) {
      setDimensions(getDimensions() as IContainerDimensions);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef.current]);

  return dimensions;
};
