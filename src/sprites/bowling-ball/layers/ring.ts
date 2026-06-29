import type { Sprite } from "../../../types";
import { createLayer } from "./../layer.js";

const draw = (ctx: CanvasRenderingContext2D, r: number) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    const outerR = r * 0.96;
    const thickness = r * 0.06;
    const innerR = outerR - thickness;

    ctx.beginPath();
    ctx.arc(0, 0, outerR, 0, Math.PI * 2);
    ctx.arc(0, 0, innerR, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.fillStyle = "rgba(255, 210, 90, 0.55)";
    ctx.shadowBlur = r * 0.08;
    ctx.shadowColor = "rgba(255, 200, 80, 0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, outerR, 0, Math.PI * 2);
    ctx.arc(0, 0, innerR, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.fillStyle = "rgba(255, 240, 170, 0.25)";
    ctx.shadowBlur = r * 0.04;
    ctx.shadowColor = "rgba(255, 220, 120, 0.6)";
    ctx.fill();

    ctx.restore();
};

export const ring: Sprite = createLayer(draw, {
    scale: 0.9,
    opacity: 1,
    clip: false,
    showGeometryBoundary: false,
    showLayerBoundary: false
});