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
    React.useEffect(()=> {
            setCurrent(wrapper.current);
        }
        ,[])

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
            pivot = {[texture.baseTexture.width/2, texture.baseTexture.height]}
            x = {texture.baseTexture.width*0.75 + (number%3)*(texture.baseTexture.width + texture.baseTexture.width*0.2)}
            y = {-texture.baseTexture.height*0.75 + (Math.floor(number/3))*(texture.baseTexture.height + texture.baseTexture.height*0.2)}

            {...props}
            width={texture.baseTexture.width}
            height={texture.baseTexture.height}

        >
        <Sprite
            ref = {wrapper}
            pivot={[current.width/2, current.height/2]}
            texture={textureBg}
            x={texture.baseTexture.width/2}
            y = {texture.baseTexture.height/2}
        >
            <CardSymbol
                x={current.width/2}
                y = {current.height/2}
                card={card}
            />
        </Sprite>
            {/*{open[number] ? null : (*/}
            {/*    <Mask draw={()=>brush}>*/}
            {/*        <Sprite*/}
            {/*            interactive*/}
            {/*            dragging ={dragging}*/}
            {/*            pointerup={"play" === status ? pointerUp : () => {}}*/}
            {/*            pointerdown={"play" === status ? pointerDown : () => {}}*/}
            {/*            pointermove={"play" === status ? pointerMove : () => {}}*/}
            {/*            // x={(container.width - texture.baseTexture.width*1.075)/2 }*/}
            {/*            // y={(container.height - texture.baseTexture.height*0.465)/2}*/}
            {/*            texture={texture}*/}
            {/*        />*/}
            {/*    </Mask>*/}
            {/*)}*/}
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