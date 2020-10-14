import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const bg = "/assets/magic_forest_bg.jpg";
const centerAnchor = new PIXI.Point(0.5, 0.5);


function Background(props) {
    const sc = new PIXI.Point(1000 / props.viewWidth, 1000 / props.viewWidth);

    return (
        <Sprite
            anchor={centerAnchor}
            scale = {props.viewHeight/1920}
            texture={PIXI.Texture.from(bg)}
            {...props}
        />
    );
}

export default Background;
