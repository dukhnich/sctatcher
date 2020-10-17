import React from "react";
import {AppContext, Sprite, Text} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import BannerHeader from "./BannerHeader";
import BannerButton from "./BannerButton";
import {connect} from "react-redux";


const banner = "/assets/magic_forest_frame2.png";
const texture = PIXI.Texture.from(banner)

function StartBanner({scale, ...props}) {
console.log(texture)
    return (
        <Sprite
            scale = {scale}
            x={(props.app.renderer.screen.width - texture.baseTexture.width*scale)/2}
            y={props.app.renderer.screen.height - texture.baseTexture.height*scale}
            texture={texture}
        >
            <BannerHeader container = {texture}/>
            <BannerButton container = {texture}/>
        </Sprite>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        scale: state.sizes.scale,

    };
};
export default connect(mapStateToProps)(StartBanner);