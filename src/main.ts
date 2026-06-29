import './style.css'
import { sprites } from "./sprites/index";
import type { Sprite } from "./types";

type ActiveSprite = {
    id: number;
    name: string;
    fn: Sprite;
};

const widthInput = document.getElementById("widthInput") as HTMLInputElement;
const heightInput = document.getElementById("heightInput") as HTMLInputElement;
const spriteSelect = document.getElementById("spriteSelect") as HTMLSelectElement;
const spriteList = document.getElementById("spriteList") as HTMLDivElement;

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const removeBtn = document.getElementById("removeBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let activeSprites: ActiveSprite[] = [];
let idCounter = 0;

const toLabel = (name: string) =>
    name
        .split("-")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

const initSelect = () => {
    spriteSelect.innerHTML = "";
    for (const s of sprites) {
        const opt = document.createElement("option");
        opt.value = s.name;
        opt.textContent = toLabel(s.name);
        spriteSelect.appendChild(opt);
    }
};

const resizeCanvas = () => {
    const w = Number(widthInput.value);
    const h = Number(heightInput.value);
    if (!w || !h) return;
    canvas.width = w;
    canvas.height = h;
    render();
};

const renderList = () => {
    spriteList.innerHTML = "";
    const counts: Record<string, number> = {};
    activeSprites.forEach(s => {
        counts[s.name] = (counts[s.name] || 0) + 1;
        const div = document.createElement("div");
        div.textContent = `${toLabel(s.name)} #${counts[s.name]}`;
        spriteList.appendChild(div);
    });
};

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of activeSprites) {
        s.fn(ctx, canvas.width, canvas.height);
    }
    renderList();
};

const addSprite = () => {
    const value = spriteSelect.value;
    if (!value) return;
    const found = sprites.find(s => s.name === value);
    if (!found) return;

    activeSprites.push({ id: idCounter++, name: found.name, fn: found.fn });
    render();
};

const removeSprite = () => {
    const value = spriteSelect.value;
    if (!value) return;

    const index = activeSprites.findIndex(s => s.name === value);
    if (index === -1) return;

    activeSprites.splice(index, 1);
    render();
};

const reset = () => {
    activeSprites = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderList();
};

const download = () => {
    const link = document.createElement("a");
    link.download = "sprite.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
};

widthInput.addEventListener("input", resizeCanvas);
heightInput.addEventListener("input", resizeCanvas);

addBtn.addEventListener("click", addSprite);
removeBtn.addEventListener("click", removeSprite);
resetBtn.addEventListener("click", reset);
downloadBtn.addEventListener("click", download);

resizeCanvas();
initSelect();