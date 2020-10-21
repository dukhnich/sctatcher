import React from "react";
import {Sprite, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {getPngName} from "../../../../consts";
import CardSymbol from "../../CardSymbol";
import {drawBrush, drawRectangle, Mask} from "../../../Mask";
import {changeCardStatus} from "../../../../services/CurrentGame";

const scratch = getPngName("scratch_frame");
const texture = PIXI.Texture.from(scratch)

const frame = getPngName("frame");
const textureBg = PIXI.Texture.from(frame)

function ScratchFrame({width, height, open, card, number, suit, scale, status, dispatch, ...props}) {
    const [dragging, setDragging] = React.useState(false)
    const [brush, setBrush] = React.useState(
        drawRectangle(
            0,
            0,
            width,
            height
        )

    )
    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef()

    const [bg, setBg] = React.useState({
        width: 0,
        height: 0
    });
    const frame = React.useRef()
    React.useEffect(()=> {
            if (wrapper.current && wrapper.current.width && wrapper.current.width !== current.width) {
                setCurrent(wrapper.current);
            }
            setBg(frame.current)
        }
        ,[wrapper.current, frame.current])

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
        dispatch({
            type: "currentGame/statusCharacter",
            payload: card === suit ? "happy_card" : "disappointed"
        });
        dispatch(changeCardStatus("set", number));
        setBrush(drawRectangle(
            0,
            0,
            width,
            height
        ));
        setTimeout(()=> {
                dispatch({type: "currentGame/statusCharacter", payload: "idle"})
            }
            ,1000)
    }
    return (<Container
            ref={wrapper}
            pivot = {[texture.baseTexture.width/2, texture.baseTexture.height*0.65]}
            x = {(number%3 -1)*(texture.baseTexture.width*1.2)}
            y = {(Math.floor(number/3))*(texture.baseTexture.height*1.2)}

        >
        <Sprite
            ref = {frame}
            pivot={[bg.width/2, bg.height/2]}
            texture={textureBg}
            x={current.width/2}
            y = {current.height/2}
        >
                <CardSymbol
                    x={bg.width / 2}
                    y={bg.height / 2}
                    card={card}
                    visible = {status !== "idle"}
                />
        </Sprite>
                <Mask draw={()=>brush}
                      visible={!open[number]}
                >
                    <Sprite
                        interactive
                        dragging ={dragging}
                        pointerup={"play" === status ? pointerUp : () => {}}
                        pointerdown={"play" === status ? pointerDown : () => {}}
                        pointermove={"play" === status ? pointerMove : () => {}}
                        // x={(container.width - texture.baseTexture.width*1.075)/2 }
                        // y={(container.height - texture.baseTexture.height*0.465)/2}
                        texture={texture}
                        visible={!open[number]}
                    />
                </Mask>
        </Container>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
        scale: state.sizes.scale,
        suit: state.currentGame.suit,
        status: state.currentGame.status,
        open: state.currentGame.open.set
    };
};
export default connect(mapStateToProps)(ScratchFrame);