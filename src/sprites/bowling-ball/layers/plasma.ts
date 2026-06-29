import type { Sprite } from "../../../types";
import { createLayer } from "./../layer.js";

const draw = (ctx: CanvasRenderingContext2D, r: number) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    const core = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
    core.addColorStop(0, "rgba(180, 255, 255, 0.95)");
    core.addColorStop(0.2, "rgba(120, 220, 255, 0.7)");
    core.addColorStop(0.5, "rgba(180, 120, 255, 0.35)");
    core.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = core;
    ctx.fill();

    const pulses = 6;
    for (let i = 0; i < pulses; i++) {
        const a = (i / pulses) * Math.PI * 2;
        const rr = r * (0.15 + (i % 3) * 0.08);

        const x = Math.cos(a) * r * 0.25;
        const y = Math.sin(a) * r * 0.25;

        const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
        g.addColorStop(0, "rgba(255, 255, 255, 0.6)");
        g.addColorStop(0.3, "rgba(120, 200, 255, 0.35)");
        g.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(x, y, rr, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }

    ctx.restore();
};

export const plasma: Sprite = createLayer(draw, {
    scale: 0.75,
    opacity: 1,
    clip: true,
    showGeometryBoundary: false,
    showLayerBoundary: false
});