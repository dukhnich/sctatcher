import React from "react";
import {Sprite, Text, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";


const fontSize = 72;
const style = new PIXI.TextStyle({
    fill: "#ff8729",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});
const question = "/assets/magic_forest_question_icon.png";
const texture = PIXI.Texture.from(question)

function BannerHeader(props) {
    const [width, setX] = React.useState(0);
    const ref = React.useRef()

    React.useEffect(()=> {
            setX(ref.current.width)
        }
        ,[])

    return (
        <Container
            ref = {ref}
            x={(props.container.baseTexture.width - width)/2}
            y={props.container.baseTexture.height*0.15}
        >
            <Sprite texture={texture} />
            <Text
                style={ style}
                text="How To Play"
                x = {texture.baseTexture.width*1.5}
                y = {(texture.baseTexture.height - fontSize)/2}
            />
        </Container>
     );
}

export default BannerHeader;
