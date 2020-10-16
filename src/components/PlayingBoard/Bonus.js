import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

const bonus = "/assets/magic_forest_winner_frame.png";
const texture = PIXI.Texture.from(bonus)


function Bonus({width, height, ...props}) {
    const [bonusWidth, setX] = React.useState(0);
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setX(wrapper.current.width);
        }
        ,[])
    return <Sprite
        ref = {wrapper}
        x={width * 0.89 - bonusWidth }
        y={(height*0.075)}
        texture={texture}
    />
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.currentGame.width,
        height: state.currentGame.height,

    };
};
export default connect(mapStateToProps)(Bonus);