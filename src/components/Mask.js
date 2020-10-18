import * as PIXI from "pixi.js";
import {CustomPIXIComponent} from "react-pixi-fiber";

export const drawRectangle = (x, y, width, height) => {
    const g = new PIXI.Graphics();
    g.clear();
    g.beginFill();
    g.drawRect(x, y, width, height);
    g.endFill();
    return g;
};

export const drawBrush = ({x, y}, r=20, dragging = true ) => {
    const g = new PIXI.Graphics()
    g.beginFill(0x000000);
    g.drawCircle(x, y, r)
    g.endFill();
    return g
};

export const Mask = CustomPIXIComponent(
    {
        customDisplayObject: ({ draw }) => {
            const container = new PIXI.Container();
            container.mask = draw();
            return container;
        },
        customApplyProps: (instance, oldProps, { draw }) => {
            instance.mask = draw();
        }
    },
    "Mask"
);