import React from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import {AppContext, Text} from "react-pixi-fiber";
import Background from "./Background";

window.PIXI = PIXI;
require("pixi-spine")

function Game(props) {
    const [spine, setSpine] = React.useState(null)

    const {app} = props;
    function onAssetsLoaded(loader, res) {
        const spineCharacter = new window.PIXI.spine.Spine(res.spineCharacter.spineData);
        // set the position
        spineCharacter.x = app.screen.width / 2;
        spineCharacter.y = app.screen.height / 2;
        setSpine(()=>spineCharacter)

        spineCharacter.scale.set(0.25);

        app.stage.addChild(spineCharacter);

        spineCharacter.state.setAnimation(0, 'red_loading_screen_animation_loop', true);
        console.log(spineCharacter.state)

        // return spineCharacter
        app.start();
    }

    // React.useEffect(()=>{
    //     app.loader
    //         .add('spineCharacter', '/assets/char_spine_v5/Red.json')
    //         .load(onAssetsLoaded);
    //     app.stage.interactive = true;
    //
    //     return ()=> {
    //         console.log(spine)
    //         // app.loader.reset()
    //         // app.stage.removeChild(spine);
    //         // app.loader.destroy();
    //     }
    //
    // },[])
    return (<>
            <Background {...props}/>
            {/*<AppContext.Consumer>*/}
            {/*    {app =>  (*/}
            {/*        <Background app={app}/>*/}
            {/*    )}*/}
            {/*</AppContext.Consumer>*/}
            </>
    );
}

Game.propTypes = {
    // app: PropTypes.object.isRequired,
};

export default Game;