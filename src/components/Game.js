import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {Container} from "react-pixi-fiber";
import Background from "./Background";
import StartBanner from "./StartBanner/StartBanner";
import { connect } from "react-redux";

window.PIXI = PIXI;
require("pixi-spine")

function Game({status, ...props}) {
// console.log(props.status)
    return (<><Container alpha = {0.7} >
            <Background {...props}/>

            </Container>
            {"idle" === status ?
            <StartBanner {...props}/>
            : null }
        </>
    );
}

Game.propTypes = {
    // app: PropTypes.object.isRequired,
};

// export default Game
//
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(Game);