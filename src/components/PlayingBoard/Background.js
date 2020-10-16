import React from "react";
import { Sprite, Container, CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

const bg = "/assets/magic_forest_bg.jpg";
const texture = PIXI.Texture.from(bg)

const drawRectangle = (x, y, width, height) => {
    const g = new PIXI.Graphics();
    g.clear();
    g.beginFill();
    g.drawRect(x, y, width, height);
    g.endFill();
    return g;
};

// simplified version, does not handle updates
const Mask = CustomPIXIComponent(
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

function Background({status, scale, ...props}) {
    const children = React.Children.map(props.children, child => {
            return React.cloneElement(child, {container: texture});
        }
    )
    return(
    <Mask draw={() => drawRectangle(
        ((props.app.renderer.screen.width - texture.baseTexture.width*scale)/2) + texture.baseTexture.width*scale*0.11,
        0,
        texture.baseTexture.width*scale*0.78,
        texture.baseTexture.height*scale
        )}>
    <Sprite
        scale = {scale}
        texture={texture}
        x={(props.app.renderer.screen.width - texture.baseTexture.width*scale)/2}
        y={(props.app.renderer.screen.height - texture.baseTexture.height*scale)/2}
    >
        {
            children
        }
    </Sprite>
    </Mask>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
        scale: state.currentGame.scale,

    };
};
export default connect(mapStateToProps)(Background);