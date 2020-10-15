import React from "react";
import {Sprite, Text, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";


const fontSize = 72;
const style = new PIXI.TextStyle({
    fill: "#ffFFFF",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});
const coin = "/assets/magic_forest_coin_icon_small.png";
const texture = PIXI.Texture.from(coin)

function ButtonText(props) {
    const [width, setX] = React.useState(0);
    const [height, setY] = React.useState(0);
    const wrapper = React.useRef();
    const text = React.useRef()


    React.useEffect(()=> {
        // console.log(text.current.width)
            setX(wrapper.current.width);
            setY(wrapper.current.height)

        }
        ,[])

    return (
        <Container
            ref = {wrapper}
            x={(props.container.baseTexture.width - width)/2}
            y={(props.container.baseTexture.height - height)/2}
        >
            <Text
                ref = {text}
                style={ style}
                text="Play for 60"
                y = {(texture.baseTexture.height - fontSize*1.2)/2}
            />
            <Sprite
                x = {text.current ? text.current.width + 20 : 0}
                texture={texture} />
        </Container>
    );
}

export default ButtonText;
