import { alignType } from "./type";

export function align(fatherRect: DOMRect, sonRect: DOMRect, align: alignType): number {
  switch (align) {
    case "central":
      return sonRect.top - ((fatherRect.height / 2) - (sonRect.height / 2));
    case "left":
      return sonRect.top;
  }
}
