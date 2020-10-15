import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const bg = "/assets/magic_forest_bg.jpg";
const centerAnchor = new PIXI.Point(0.5, 0.5);


function Background(props) {
    return (

        <Sprite
            anchor={centerAnchor}
            scale = {props.scale}
            texture={PIXI.Texture.from(bg)}
            {...props}
        />
    );
}

export default Background;
