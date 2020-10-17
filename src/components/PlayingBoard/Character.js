import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

window.PIXI = PIXI;
require("pixi-spine")

function Character({app, width, height, status, scale,  ...props}) {

    function onAssetsLoaded(loader, res) {
        const character = new window.PIXI.spine.Spine(res.character.spineData);
        // set the position
        character.x = width*0.26;
        character.y = height*0.155;

        character.scale.set(scale);

        app.stage.addChild(character);

        character.state.setAnimation(0, 'red_idle_loop', true);
        // console.log(spineCharacter.state)
        // app.start();
    }

    React.useEffect(()=>{
        // console.log(app.stage.getChildAt(0))
        app.loader
            .add('character', '/assets/char_spine_v5/Red.json')
            .load(onAssetsLoaded);

        return ()=> {
            app.stage.removeChild(app.stage.getChildAt(0));
        }

    },[])
    return (<></>
    );
}

Character.propTypes = {
    app: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
        status: state.currentGame.status,
        scale: state.sizes.scale,

    };
};
export default connect(mapStateToProps)(Character);