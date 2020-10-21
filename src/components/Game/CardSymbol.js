import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {getPngName} from "../../consts";



function CardSymbol({card, ...props}) {
    const texture = PIXI.Texture.from(getPngName(card))

    const [suit, setSuit] = React.useState({
        width: 0,
        height: 0
    });
    const symbol = React.useRef();
    // console.log(suit, card)

    React.useEffect(()=> {
            texture.on('update', () => {
                setSuit(symbol.current);
                // console.log(texture.baseTexture)
                // console.log(texture.baseTexture.width, current.width)
            });
        }
        ,[])
    return (
            <Sprite
                ref={symbol}
                pivot={[texture.baseTexture.width/2, texture.baseTexture.height/2]}
                {...props}
                texture={texture}
            />

    )
}

export default CardSymbol;