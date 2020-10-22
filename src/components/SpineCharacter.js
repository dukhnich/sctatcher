import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {SpineAnimation} from "./Spine";

window.PIXI = PIXI;
require("pixi-spine")

function SpineCharacter({scale, dispatch, status, app}) {
    const [spineData, setSpineData] = React.useState(null)

    function loader(loader, res) {
        setSpineData(res.spineCharacter)
    }

    React.useEffect(()=>{
        if (status !== "download" && ! spineData) {
            app.loader
                .add('spineCharacter', '/assets/char_spine_v5/Red.json')
                .load(loader)
        }
        if (spineData && app.stage.getChildAt(0)) {
            app.stage.getChildAt(0).name = 'spineCharacter';
            app.stage.getChildAt(0).state.setAnimation(0, 'red_loading_screen_animation_loop', true);
            dispatch({type: "sizes/setStatus", payload: "download"});
        }
    },[status, spineData, app.stage, app.loader])

    return spineData ? (
        <SpineAnimation
            spine = {spineData}
            x ={app.screen.width / 2}
            y = {app.screen.height / 2}
            scale = {scale}

        />
    )
        : null;
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