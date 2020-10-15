import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {AppContext, Text, Container} from "react-pixi-fiber";
import Background from "./Background";
import StartBanner from "./StartBanner/StartBanner";

window.PIXI = PIXI;
require("pixi-spine")

function Game(props) {

    return (<><Container alpha = {0.7} >
            <Background {...props}/>

            </Container>
            <StartBanner {...props}/>
        </>
    );
}

Game.propTypes = {
    app: PropTypes.object.isRequired,
};

export default Game;