import { RefObject, useEffect } from "react";

export const useOutsideClickHandler = (
  refs: Array<RefObject<HTMLInputElement>>,
  handler: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        refs.some((ref) => ref.current) &&
        refs.every(
          (ref) => !ref.current?.contains(event.target as HTMLInputElement)
        )
      ) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
};
