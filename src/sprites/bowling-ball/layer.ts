import type { Sprite } from "../../types";
import type { LayerOptions } from "./types";

const defaults: Required<LayerOptions> = {
    scale: 1,
    opacity: 1,
    clip: false,
    showGeometryBoundary: false,
    showLayerBoundary: false,
};

export const createLayer = (draw: (ctx: CanvasRenderingContext2D, r: number) => void, options?: LayerOptions): Sprite => {
    const opts = { ...defaults, ...(options || {}) };

    return (ctx, width, height) => {
        const size = Math.min(width, height);
        const cx = width / 2;
        const cy = height / 2;

        const originalR = size / 2;
        const scaledR = originalR * opts.scale;

        ctx.save();
        ctx.globalAlpha = opts.opacity;
        ctx.translate(cx, cy);

        if (opts.clip) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, scaledR, 0, Math.PI * 2);
            ctx.clip();
            draw(ctx, scaledR);
            ctx.restore();
        } else {
            draw(ctx, scaledR);
        }

        if (opts.showGeometryBoundary) {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.arc(0, 0, originalR, 0, Math.PI * 2);
            ctx.stroke();
        }

        if (opts.showLayerBoundary) {
            ctx.beginPath();
            ctx.strokeStyle = "green";
            ctx.lineWidth = 2;
            ctx.arc(0, 0, scaledR, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    };
};