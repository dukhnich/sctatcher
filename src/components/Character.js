import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

window.PIXI = PIXI;
require("pixi-spine")

function Character(props) {

    const {app} = props;
    function onAssetsLoaded(loader, res) {
        const spineCharacter = new window.PIXI.spine.Spine(res.spineCharacter.spineData);
        // set the position
        spineCharacter.x = app.screen.width / 2;
        spineCharacter.y = app.screen.height / 2;

        spineCharacter.scale.set(0.25);

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
        app.stage.interactive = true;

        return ()=> {
            console.log(app.stage.getChildAt(0))
            app.stage.removeChild(app.stage.getChildAt(0));
            // app.loader.destroy();
        }

    },[])
    return (<></>
    );
}

Character.propTypes = {
    app: PropTypes.object.isRequired,
};

export default Character;