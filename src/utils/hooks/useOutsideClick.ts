import { useEffect, useRef } from "react";

/**
 * This is a TypeScript function that takes a callback function as input and returns a reference to a
 * div element, which triggers the callback when a click event occurs outside of the div element.
 * @param callback - The `callback` parameter is a function that will be called when a click or touch
 * event occurs outside of the element referenced by the `ref` object.
 * @returns The `useOutsideClick` hook returns a `ref` object that can be attached to a DOM element.
 * This `ref` object is created using the `useRef` hook and is of type `HTMLDivElement`. The `ref`
 * object is used to detect clicks outside of the element it is attached to, and when a click is
 * detected, the `callback` function passed to the hook is
 */
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
