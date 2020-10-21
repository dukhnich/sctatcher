import React from "react";
import { Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

const bg = "/assets/magic_forest_bg.jpg";
const texture = PIXI.Texture.from(bg)

function Background({status, scale, dispatch, heightScreen, ...props}) {
    // const children = React.Children.map(props.children, child => {
    //         return React.cloneElement(child, {container: texture});
    //     }
    // );
    const width = texture.baseTexture.width;
    const height = texture.baseTexture.height;
    dispatch({ type: "sizes/setSizes", payload: {
            widthBg: width,
            heightBg: height,
            scale: (heightScreen / (window.devicePixelRatio || 1))/height
        }});



    return(

    <Sprite
        scale = {scale}
        texture={texture}
        x={(props.app.renderer.screen.width - width*scale)/2}
        y={(props.app.renderer.screen.height - height*scale)/2}
    >
        {props.children}
        <Sprite
            texture={PIXI.Texture.WHITE}
            width ={width}
            height = {height}
            tint = {0x000000}
            alpha={0.6}
            visible={"idle" === status || "finish" === status}
        />
    </Sprite>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
        scale: state.sizes.scale,
        heightScreen: state.sizes.heightScreen,

    };
};
export default connect(mapStateToProps)(Background);