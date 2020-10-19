import React from "react";
import PropTypes from "prop-types";
import Background from "./PlayingBoard/Background";
import { connect } from "react-redux";
import BoardHeader from "./PlayingBoard/GameHeader";
import StartBanner from "./StartBanner/StartBanner";
import Bonus from "./PlayingBoard/Bonus/Bonus";
import Character from "./PlayingBoard/Character";
import {Mask, drawRectangle} from "./Mask";
import {SpineAnimation} from "./Spine";
import PlayingBoard from "./PlayingBoard/PlayingBoard";
import GameHeader from "./PlayingBoard/GameHeader";


function Game({status, scale, width, height, dispatch, ...props}) {

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
                <GameHeader/>
                <PlayingBoard/>
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
        scale: state.sizes.scale,
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
    };
};
export default connect(mapStateToProps)(Game);