import type { Sprite } from "../../../types";
import { createLayer } from "./../layer.js";

const draw = (ctx: CanvasRenderingContext2D, r: number) => {
    const glass = ctx.createRadialGradient(-r * 0.35, -r * 0.35, r * 0.1, 0, 0, r);
    glass.addColorStop(0, "rgba(255, 255, 210, 0.95)");
    glass.addColorStop(0.25, "rgba(255, 220, 120, 0.75)");
    glass.addColorStop(0.6, "rgba(210, 160, 60, 0.55)");
    glass.addColorStop(1, "rgba(120, 80, 20, 0.35)");

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = glass;
    ctx.fill();

    const innerGlow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r);
    innerGlow.addColorStop(0, "rgba(255, 255, 200, 0.25)");
    innerGlow.addColorStop(1, "rgba(255, 200, 80, 0)");

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = innerGlow;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(-r * 0.35, -r * 0.35, r * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
    ctx.fill();
};

export const ball: Sprite = createLayer(draw, {
    scale: 0.8,
    opacity: 0.85,
    clip: true,
    showGeometryBoundary: false,
    showLayerBoundary: false,
});