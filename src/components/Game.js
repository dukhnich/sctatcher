import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {Container, Sprite, CustomPIXIComponent} from "react-pixi-fiber";
import Background from "./PlayingBoard/Background";
import { connect } from "react-redux";
import BoardHeader from "./PlayingBoard/BoardHeader";
import StartBanner from "./StartBanner/StartBanner";
import Bonus from "./PlayingBoard/Bonus";
import Character from "./PlayingBoard/Character";


function Game({status, scale, width, height, dispatch, ...props}) {
    dispatch({ type: "currentGame/setScale", payload: (window.innerHeight / (window.devicePixelRatio || 1))/1920 })

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

    return (
        <Mask draw={() => drawRectangle(
            ((props.app.renderer.screen.width - width*scale)/2) + width*scale*0.11,
            0,
            width*scale*0.78,
            height
        )}>
            <Background {...props}>
                <Bonus/>
                <Character {...props}/>
                <BoardHeader/>
            </Background>
            {("idle" === status || "finish" === status )?
                <StartBanner {...props}/>
                : null
            }
        </Mask>

    );
}

Game.propTypes = {
    app: PropTypes.object.isRequired,
};


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
        scale: state.currentGame.scale,
        width: state.currentGame.width,
        height: state.currentGame.height,
    };
};
export default connect(mapStateToProps)(Game);