import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import ButtonText from "./ButtonText";
import {connect} from "react-redux";
import {startGame} from "../../services/CurrentGame";

const button = "/assets/magic_forest_button.png";
const texture = PIXI.Texture.from(button)

function BannerButton({status, container, dispatch, ...props}) {
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
                pointerup={() => dispatch(startGame())}
                // pointerup={() => console.log("click")}
                ref = {ref}
                x={(container.baseTexture.width - width)/2}
                y={container.baseTexture.height/2}
                texture={texture}
            >
            <ButtonText container = {texture}/>
            </Sprite>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(BannerButton);
