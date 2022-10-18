import { Dispatch, SetStateAction } from "react";
import { gsap } from "gsap";

export const fadeAnimation = (className: string) => {
  gsap.fromTo(
    className,
    { opacity: 0, pointerEvents: "none" },
    { opacity: 1, pointerEvents: "all", delay: 1, ease: "power4.out" }
  );
};

export const counterAnimation = (
  object: any,
  number: number,
  setState: Dispatch<SetStateAction<any>>
) => {
  gsap.to(object, {
    value: number !== undefined && number,
    duration: 1,
    onUpdate: () => setState({ value: Math.floor(object.value) }),
  });
};
