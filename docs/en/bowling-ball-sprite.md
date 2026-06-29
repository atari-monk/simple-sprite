- Sprite Layer interface in sprite generator
- This functions produce sprite layers

```ts
type Sprite = (ctx: CanvasRenderingContext2D, width: number, height: number) => void;

export const spriteLayer: Sprite = (ctx, width, height) => {}
```

- Goal is to generate bowling ball sprite with 2d canvas
- Each layer should have same circular geometry
- Center it
- Give a flag that draws boundary of geometry in red color
- Giva a parameter that allows to scale layer
- Give a flag that draws green boundary of a layer (scaled)
- Each layer will render custom part that will produce sprite
- We should also have clip and opacity params
- Implement API witch each layer of bowling ball will use
- It is factory creating a wrapper on function drawing a layer
- Wrapper adds shared features of layers like geometry, scaling, opacity, cliping and so on