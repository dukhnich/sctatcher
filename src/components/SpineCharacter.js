import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {Container} from "react-pixi-fiber";
import {SpineAnimation} from "./Spine";

window.PIXI = PIXI;
require("pixi-spine")

function SpineCharacter({scale, dispatch, status, app}) {
    const [spineData, setSpineData] = React.useState(null)

    function loader(loader, res) {
        setSpineData(res.spineCharacter)
        dispatch({type: "sizes/setStatus", payload: "download"});
    }

    React.useEffect(()=>{
        if (status !== "download") {
            app.loader
                .add('spineCharacter', '/assets/char_spine_v5/Red.json')
                .load(loader)
        }
        else {
            app.stage.getChildAt(0).name = 'spineCharacter';
            app.stage.getChildAt(0).state.setAnimation(0, 'red_loading_screen_animation_loop', true);
        }
    },[status])

    return status === "download" ? (
        <SpineAnimation
            spine = {spineData}
            x ={app.screen.width / 2}
            y = {app.screen.height / 2}
            scale = {scale}

        />
    )
        : <Container/>;
}

SpineCharacter.propTypes = {
    app: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        scale: state.sizes.scale,
        status: state.sizes.status,

    };
};
export default connect(mapStateToProps)(SpineCharacter);