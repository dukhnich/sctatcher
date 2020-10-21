import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {getPngName} from "../../consts";

function CurrencySymbol({name, ...props}) {
    const textureDollar = PIXI.Texture.from(getPngName(name))

    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });

    const wrapper = React.useRef();


    React.useEffect(()=> {
            textureDollar.on('update', () => {
                setCurrent(wrapper.current);
            });
        }
        ,[wrapper.current])
    return (
        <Sprite
            ref = {wrapper}
            {...props}
            texture={textureDollar}
            pivot = {[-current.width*0.2, current.height/2]}
        />
    );
}

export default CurrencySymbol