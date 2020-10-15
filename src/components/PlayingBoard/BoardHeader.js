import React from "react";
import {Container, Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const header = "/assets/magic_forest_win_up_to_100.png";
const texture = PIXI.Texture.from(header)


function BoardHeader(props) {
    const [width, setX] = React.useState(0);
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setX(wrapper.current.width);

        }
        ,[])
    return <Sprite
        ref = {wrapper}
        x={(props.container.baseTexture.width - width)/2}
        y={(props.container.baseTexture.height*0.02)}
        texture={texture}
    />
}

export default BoardHeader;
