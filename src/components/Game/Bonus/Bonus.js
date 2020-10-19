import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {getPngName} from "../../../consts";
import ScratchBig from "./ScratchFrameBig";

const bonus = getPngName("winner_frame");
const texture = PIXI.Texture.from(bonus)


function Bonus({width, height,card, status, ...props}) {
    const [container, setContainer] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setContainer(wrapper.current);
        }
        ,[])
    return (
    <Sprite
        ref = {wrapper}
        x={width * 0.89 - container.width }
        y={(height*0.075)}
        texture={texture}
    >
        <ScratchBig container={container} {...props}/>
    </Sprite>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
        card: state.currentGame.bonusSet.set[0],
        status: state.currentGame.status,


    };
};
export default connect(mapStateToProps)(Bonus);