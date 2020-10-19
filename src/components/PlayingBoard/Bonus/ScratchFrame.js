import React from "react";
import {Sprite, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {getPngName} from "../../../consts";
import CardSymbol from "../CardSymbol";
import {drawBrush, drawRectangle, Mask} from "../../Mask";
import {openCard} from "../../../services/CurrentGame";

const frame = getPngName("scratch_frame_big");
const texture = PIXI.Texture.from(frame)


function ScratchBig({width, height,card, container, scale, status, dispatch, ...props}) {
    const [dragging, setDragging] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const [brush, setBrush] = React.useState(
        drawRectangle(
            0,
            0,
            width,
            height
        )

    )

    function pointerMove(event) {
        if (dragging) {
            dispatch({type: "currentGame/statusCharacter", payload: "worry"})
            // brush.position.copyFrom(event.data.global);
            // console.log(event.data.global, brush)
            setBrush(drawBrush(event.data.global, 100*scale))
            // props.app.renderer.render(brush, texture, false, null, false);
        }
    }

    function pointerDown(event) {
        setDragging(true);
        pointerMove(event);
    }

    function pointerUp(event) {
        setDragging(false);
        setOpen(true);
        dispatch({type: "currentGame/statusCharacter", payload: "happy_bonus"});
        setTimeout(()=> {
                dispatch({type: "currentGame/statusCharacter", payload: "idle"})
                dispatch(openCard("bonus", 0))
            }
        ,1000)
    }
    return (<Container
            x={(container.width - texture.baseTexture.width*1.075)/2 }
            y={(container.height - texture.baseTexture.height*0.465)/2}
            width={texture.baseTexture.width}
            height={texture.baseTexture.height}

        >
            <CardSymbol container={texture.baseTexture}/>
            {open ? null : (
                <Mask draw={()=>brush}>
                    <Sprite
                    interactive
                    dragging ={dragging}
                    pointerup={"play" === status ? pointerUp : () => {}}
                    pointerdown={"play" === status ? pointerDown : () => {}}
                    pointermove={"play" === status ? pointerMove : () => {}}
                    // x={(container.width - texture.baseTexture.width*1.075)/2 }
                    // y={(container.height - texture.baseTexture.height*0.465)/2}
                    texture={texture}
                    />
                </Mask>
            )}
        </Container>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
        scale: state.sizes.scale,
        card: state.currentGame.bonusSet.set[0],
        status: state.currentGame.status,


    };
};
export default connect(mapStateToProps)(ScratchBig);