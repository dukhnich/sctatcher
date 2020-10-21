import React from "react";
import {Sprite, Text, Container} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {getPngName} from "../../../../consts";
import {connect} from "react-redux";


const fontSize = 52;
const style = new PIXI.TextStyle({
    fill: "#f45b4e",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize,

});


function BoardText({suit, status, ...props}) {
    const texture = PIXI.Texture.from(getPngName(suit + "_small"))

    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });
    const [firstText, setText1] = React.useState({
        width: 0,
        height: 0
    });
    const [secondText, setText2] = React.useState({
        width: 0,
        height: 0
    });
    const [suitSymbol, setSymbol] = React.useState({
        width: 0,
        height: 0
    });

    const wrapper = React.useRef();
    const text1 = React.useRef();
    const text2 = React.useRef();
    const symbol = React.useRef();

    React.useEffect(()=> {
            setCurrent(wrapper.current);
            setText1(text1.current);
            setText2(text2.current);
            texture.on('update', () => {
                setSymbol(symbol.current);
            });
        }
        ,[])

    return (
        <Container
            pivot = {[0, current.height/2]}
            ref = {wrapper}
            visible = {"play" === status || "finish" === status}

            {...props}
        >
            <Text
                ref={text1}
                style={ style}
                pivot = {[0, firstText.height/2]}
                y = {current.height /2}
                text="MATCH THE WINNER"
            />
            <Sprite
                ref={symbol}
                pivot = {[0, suitSymbol.height/2]}
                x = {firstText.width + suitSymbol.width*0.15}
                y = {current.height /2}
                texture={texture}
            />
            <Text
                ref={text2}
                style={ style}
                pivot = {[0, secondText.height/2]}
                x = {firstText.width + suitSymbol.width*1.3}
                y = {current.height /2}
                text="AND WIN A PRIZE!"
            />
        </Container>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        suit: state.currentGame.suit,
        status: state.currentGame.status,
    };
};
export default connect(mapStateToProps)(BoardText);