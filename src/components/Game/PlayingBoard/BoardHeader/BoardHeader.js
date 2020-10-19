import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {getPngName} from "../../../../consts";
import BoardText from "./BoardText";
import {connect} from "react-redux";

const frame = getPngName("frame_for_text");
const texture = PIXI.Texture.from(frame)

function BoardHeader({status, ...props}) {
    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setCurrent(wrapper.current);
        }
        ,[])

    return (
            <Sprite
                ref = {wrapper}
                texture={texture}
                pivot = {[current.width / 2, current.height/2]}
                {...props}
            >
                {"play" === status || "finish" === status ?
                    (<BoardText
                        x = {current.width*0.035}
                        y = {current.height /2}
                    />)
                    :null
                }

            </Sprite>

    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(BoardHeader);
