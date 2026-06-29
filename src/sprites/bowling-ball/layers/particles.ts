import type { Sprite } from "../../../types";
import { createLayer } from "./../layer.js";

const draw = (ctx: CanvasRenderingContext2D, r: number) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    const count = 80;

    for (let i = 0; i < count; i++) {
        const t = i / count;

        const angle = t * Math.PI * 2 + Math.sin(i * 9.17) * 0.6;

        const dirX = Math.cos(angle);
        const dirY = Math.sin(angle);

        const energy = 0.25 + Math.abs(Math.sin(i * 13.37)) * 0.75;

        const dist = r * (0.08 + energy * 0.65);

        const x = dirX * dist;
        const y = dirY * dist;

        const size = 0.8 + energy * 2.2;

        const glow = 0.12 + energy * 0.55;

        const core = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        core.addColorStop(0, `rgba(220, 255, 255, ${glow * 0.6})`);
        core.addColorStop(0.3, `rgba(120, 220, 255, ${glow * 0.25})`);
        core.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.fillStyle = core;
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${glow * 0.6})`;
        ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(120, 200, 255, ${glow * 0.2})`;
        ctx.arc(x * 0.7, y * 0.7, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
};

export const particles: Sprite = createLayer(draw, {
    scale: 0.9,
    opacity: 1,
    clip: true,
    showGeometryBoundary: false,
    showLayerBoundary: false
});