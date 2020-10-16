import React from "react";
import PropTypes from "prop-types";
import {Container} from "react-pixi-fiber";
import StartBanner from "./StartBanner/StartBanner";
import { connect } from "react-redux";
import PlayingBoard from "./PlayingBoard/PlayingBoard";

const height = window.innerHeight;

function Game({status, dispatch, ...props}) {
    React.useState(()=>
            dispatch({ type: "currentGame/setScale", payload: (height / (window.devicePixelRatio || 1))/1920 })

        ,[])

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