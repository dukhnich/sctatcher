import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {Container} from "react-pixi-fiber";
import StartBanner from "./StartBanner/StartBanner";
import { connect } from "react-redux";
import PlayingBoard from "./PlayingBoard/PlayingBoard";

window.PIXI = PIXI;
require("pixi-spine")

function Game({status, ...props}) {
    return (<>
            <Container
                alpha = {"idle" === status ? 0.6 : 1}
            >
                <PlayingBoard {...props}/>

            </Container>
            {("idle" === status || "finish" === status )?
                <StartBanner {...props}/>
                : null
            }
        </>
    );
}

Game.propTypes = {
    app: PropTypes.object.isRequired,
};


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(Game);