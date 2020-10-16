import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

window.PIXI = PIXI;
require("pixi-spine")

function Character(props) {

    const {app} = props;
    function onAssetsLoaded(loader, res) {
        const character = new window.PIXI.spine.Spine(res.character.spineData);
        // set the position
        character.x = app.screen.width / 2;
        character.y = app.screen.height / 2;

        character.scale.set(0.25);

        app.stage.addChild(character);

        character.state.setAnimation(0, 'red_loading_screen_animation_loop', true);
        // console.log(spineCharacter.state)
        app.start();
    }

    React.useEffect(()=>{
        // console.log(app.stage.getChildAt(0))
        app.loader
            .add('character', '/assets/char_spine_v5/Red.json')
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