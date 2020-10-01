import { positioningOptions } from "./type";
import { align } from "./align";

export function positioning(
  son: HTMLElement,
  father: HTMLElement,
  options: positioningOptions = { align: "central", position: "relative" }
): number {
  var fatherRect = father.getBoundingClientRect();
  var sonRect = son.getBoundingClientRect();
  var outcome = align(fatherRect, sonRect, options.align);

  //position
  switch (options.position) {
    case "relative":
      return outcome + father.scrollTop;
    case "absolute":
      return outcome + document.documentElement.scrollTop;
  }
}
