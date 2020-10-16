import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {Container, CustomPIXIComponent} from "react-pixi-fiber";
import Background from "./Background";
import { connect } from "react-redux";
import BoardHeader from "./BoardHeader";
import StartBanner from "../StartBanner/StartBanner";


function PlayingBoard({status, scale, width, height, dispatch, ...props}) {

    return (<></>

    );
}

PlayingBoard.propTypes = {
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
export default connect(mapStateToProps)(PlayingBoard);