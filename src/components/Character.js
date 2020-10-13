import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

window.PIXI = PIXI;
require("pixi-spine")

function Character(props) {
    const [spine, setSpine] = React.useState(null)

    const {app} = props;
    function onAssetsLoaded(loader, res) {
        const spineCharacter = new window.PIXI.spine.Spine(res.spineCharacter.spineData);
console.log(spineCharacter)
        // set the position
        spineCharacter.x = app.screen.width / 2;
        spineCharacter.y = app.screen.height / 2;
        setSpine(()=>spineCharacter)

        spineCharacter.scale.set(0.25);

        app.stage.addChild(spineCharacter);

        spineCharacter.state.setAnimation(0, 'red_loading_screen_animation_loop', true);
        // return spineCharacter
        // app.start();
    }

    React.useEffect(()=>{
        app.loader
            .add('spineCharacter', '/assets/char_spine_v5/Red.json')
            .load(onAssetsLoaded);
        app.stage.interactive = true;

        return ()=> {
            console.log(spine)
            app.loader.reset()
            // app.stage.removeChild(spine);
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