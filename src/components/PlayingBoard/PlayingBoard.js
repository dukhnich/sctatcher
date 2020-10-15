import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {Container, Sprite, Text} from "react-pixi-fiber";
import Background from "./Background";
import { connect } from "react-redux";
import BoardHeader from "./BoardHeader";

window.PIXI = PIXI;
require("pixi-spine")

function PlayingBoard({status, ...props}) {
    return (
        <Background {...props}>
            <BoardHeader/>
        </Background>
    );
}

PlayingBoard.propTypes = {
    app: PropTypes.object.isRequired,
};


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(PlayingBoard);