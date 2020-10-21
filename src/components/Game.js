import React from "react";
import PropTypes from "prop-types";
import Background from "./Game/Background";
import { connect } from "react-redux";
import StartBanner from "./StartBanner/StartBanner";
import Bonus from "./Game/Bonus/Bonus";
import Character from "./Game/Character";
import {Mask, drawRectangle} from "./Mask";
import PlayingBoard from "./Game/PlayingBoard/PlayingBoard";
import GameHeader from "./Game/GameHeader";
import WinBanner from "./WinBanner/WinBanner";


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
            <WinBanner {...props}/>
            <StartBanner {...props}/>
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