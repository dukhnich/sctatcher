import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";

const header = "/assets/magic_forest_win_up_to_100.png";
const texture = PIXI.Texture.from(header)


function BoardHeader({width, height, ...props}) {
    const [headerWidth, setX] = React.useState(0);
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setX(wrapper.current.width);
        }
        ,[])
    return <Sprite
        ref = {wrapper}
        x={(width - headerWidth)/2}
        y={(height*0.02)}
        texture={texture}
    />
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.currentGame.width,
        height: state.currentGame.height,

    };
};
export default connect(mapStateToProps)(BoardHeader);