import React from "react";
import {AppContext, Sprite, Text} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import BannerHeader from "./BannerHeader";
import BannerButton from "./BannerButton";


const banner = "/assets/magic_forest_frame2.png";
const texture = PIXI.Texture.from(banner)

function StartBanner(props) {
console.log(texture)
    return (
        <Sprite
            scale = {props.scale}
            x={(props.app.renderer.screen.width - texture.baseTexture.width*props.scale)/2}
            y={props.app.renderer.screen.height - texture.baseTexture.height*props.scale}
            texture={texture}
        >
            <BannerHeader container = {texture}/>
            <BannerButton container = {texture}/>
        </Sprite>
    );
}

export default StartBanner;
