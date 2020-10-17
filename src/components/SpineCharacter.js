import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

window.PIXI = PIXI;
require("pixi-spine")

function SpineCharacter({scale, app}) {

    function onAssetsLoaded(loader, res) {
        const spineCharacter = new window.PIXI.spine.Spine(res.spineCharacter.spineData);
        // set the position
        spineCharacter.x = app.screen.width / 2;
        spineCharacter.y = app.screen.height / 2;

        spineCharacter.scale.set(scale);

        app.stage.addChild(spineCharacter);

        spineCharacter.state.setAnimation(0, 'red_loading_screen_animation_loop', true);
        // console.log(spineCharacter.state)
        app.start();
    }

    React.useEffect(()=>{
        // console.log(app.stage.getChildAt(0))
        app.loader
            .add('spineCharacter', '/assets/char_spine_v5/Red.json')
            .load(onAssetsLoaded);

        return ()=> {
            app.stage.removeChild(app.stage.getChildAt(0));
        }

    },[])
    return (<></>
    );
}

SpineCharacter.propTypes = {
    app: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        scale: state.sizes.scale,
    };
};
export default connect(mapStateToProps)(SpineCharacter);