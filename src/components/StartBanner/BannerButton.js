import React from "react";
import {Sprite, Text, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import ButtonText from "./ButtonText";


const fontSize = 72;
const style = new PIXI.TextStyle({
    align: "center",
    fill: "#ffffff",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});
const button = "/assets/magic_forest_button.png";
const texture = PIXI.Texture.from(button)

function BannerButton(props) {
    const [width, setX] = React.useState(0);
    const ref = React.useRef()

    React.useEffect(()=> {
            setX(ref.current.width)
        }
        ,[])

    return (
            <Sprite
                buttonMode
                interactive
                // pointerup={() => dispatch({ type: "INCREMENT" })}
                pointerup={() => console.log("click")}
                ref = {ref}
                x={(props.container.baseTexture.width - width)/2}
                y={props.container.baseTexture.height/2}
                texture={texture}
            >
            <ButtonText container = {texture}/>
            </Sprite>
        // </Container>
    );
}

export default BannerButton;
