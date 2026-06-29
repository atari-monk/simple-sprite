## Requirements for basic sprite generator

### App
- Sprite generator web app
- Stack: HTML + CSS + TypeScript
- Separate files (index, style, main, /sprites/*.ts)

### Html
- UI includes:
    - Width/height inputs
    - Sprite dropdown (only source of selection)
    - List of active sprites (readonly display only)
    - Add Sprite button
    - Remove Sprite button
    - Reset list button
    - Download button
    - Canvas with transparent background

### Css
- Simple style

### Logic
- Logic in main.ts
- Wire ui
- Ability to plug in multiple sprite functions (static):

```ts
import { redRectangle } from "./sprites/red-rectangle";

export const sprites = [
  { name: "red-rectangle", fn: redRectangle }
];
```

- Sprite slector can show sprite file names (kebab) converted to label
- Example sprite (red rectangle)
- Export canvas as PNG with transparency
- Sprite API:

```ts
type Sprite = (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
```

- Produce layers by maintainig list of active sprites to render them in order, handle add, remove, reset (allow duplicates)
- Reset clears active sprite list and canvas
- Render immediately after Add Sprite / Remove Sprite / Reset
- On Remove click, remove selected sprite instance (first match) from active list (also for duplicates)
- Initially canvas is empty and none is selected
- Canvas should resize on width and height input change and sprites rerender on existing sprite list
- Clear selection after actions
- Empty dropdown - add/remove does nothing
- Render sprite list in array order (oldest → newest)
- Simply add/remove sprite that is selected form dropdown to active list or reset it
- Duplicates should have #nr in display list
- Download should export current canvas size (from inputs)

### Config
- Add minimal config (plain tsc)
- Build + local run + publish (override) scripts
- GitHub Pages output path is `/home/atari-monk/atari-monk/project/pages/texture-generator` (for files from dist/*)