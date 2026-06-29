import type { Sprite } from "../types.js";
import { greenCircle } from "./green-circle.js";
import { redRectangle } from "./red-rectangle.js";

export const sprites: { name: string; fn: Sprite }[] = [
    { name: "red-rectangle", fn: redRectangle },
    { name: "green-circle", fn: greenCircle }
];