import type { Sprite } from "../types";

export const greenCircle: Sprite = (ctx, width, height) => {
    ctx.fillStyle = "green";

    const radius = Math.min(width, height) * 0.2;
    const x = width * 0.5;
    const y = height * 0.5;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
};