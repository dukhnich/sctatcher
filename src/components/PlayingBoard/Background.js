import React from "react";
import { Sprite, Container, CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

const bg = "/assets/magic_forest_bg.jpg";
const texture = PIXI.Texture.from(bg)

function Background({status, scale, dispatch, ...props}) {
    // const children = React.Children.map(props.children, child => {
    //         return React.cloneElement(child, {container: texture});
    //     }
    // );
    const width = texture.baseTexture.width;
    const height = texture.baseTexture.height;
    dispatch({ type: "currentGame/setWidth", payload: width});
    dispatch({ type: "currentGame/setHeight", payload: height});




    return(

    <Sprite
        scale = {scale}
        texture={texture}
        x={(props.app.renderer.screen.width - width*scale)/2}
        y={(props.app.renderer.screen.height - height*scale)/2}
    >
        {
            props.children
        }
    </Sprite>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
        scale: state.currentGame.scale,

    };
};
export default connect(mapStateToProps)(Background);