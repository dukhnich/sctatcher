import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const bg = "/assets/magic_forest_bg.jpg";
const texture = PIXI.Texture.from(bg)


function Background(props) {
    const children = React.Children.map(props.children, child => {
            return React.cloneElement(child, {container: texture});
        }
    )
    return <Sprite
        scale = {props.scale}
        texture={texture}
        x={(props.app.renderer.screen.width - texture.baseTexture.width*props.scale)/2}
        y={(props.app.renderer.screen.height - texture.baseTexture.height*props.scale)/2}
    >
        {
            children
        }
    </Sprite>;
}

export default Background;
