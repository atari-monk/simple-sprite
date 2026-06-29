import type { Sprite } from "../types";

export const redRectangle: Sprite = (ctx, width, height) => {
    ctx.fillStyle = "red";
    ctx.fillRect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);
};