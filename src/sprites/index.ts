import type { Sprite } from "../types.js";
import { greenCircle } from "./green-circle.js";
import { redRectangle } from "./red-rectangle.js";

import { ball } from "./bowling-ball/layers/ball.js";
import { plasma } from "./bowling-ball/layers/plasma.js";
import { ring } from "./bowling-ball/layers/ring.js";
import { particles } from "./bowling-ball/layers/particles.js";

export const sprites: { name: string; fn: Sprite }[] = [
    { name: "red-rectangle", fn: redRectangle },
    { name: "green-circle", fn: greenCircle },

    { name: "ball", fn: ball },
    { name: "plasma", fn: plasma },
    { name: "ring", fn: ring },
    { name: "particles", fn: particles }
];