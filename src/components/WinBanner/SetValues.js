import React from "react";
import {Container, Sprite, Text} from "react-pixi-fiber";
import {connect} from "react-redux";
import * as PIXI from "pixi.js";
import {getPngName} from "../../consts";

const fontSize = 126;
const style = new PIXI.TextStyle({
    fill: "#311d1f",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});

const textureDollar = PIXI.Texture.from(getPngName("dollar_icon"))
const textureCoin = PIXI.Texture.from(getPngName("coin_icon_big"))

function SetValues({bonusWin, setWin, ...props}) {
    const countWin = (wins) => {
        const finalWin = {};
        for (let win of wins) {
            for (let [currency, value] of Object.entries(win)) {
                if (value > 0) {
                    if (finalWin[currency]) {
                        finalWin[currency] += value
                    }
                    else {
                        finalWin[currency] = value
                    }
                }
            }
        }
        return finalWin
    }

    const wins = countWin([bonusWin, setWin]);


    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });

    const [dollar, setDollar] = React.useState({
        width: 0,
        height: 0
    });
    const [coin, setCoin] = React.useState({
        width: 0,
        height: 0
    });

    const wrapper = React.useRef();
    const currency1 = React.useRef();
    const currency2 = React.useRef();

    React.useEffect(()=> {
        console.log(currency1.current)
            setCurrent(wrapper.current);
            if (currency1.current) {
                setDollar(currency1.current);
            }
            if (currency2.current) {
                setCoin(currency2.current);
            }
            textureDollar.on('update', () => {
                setDollar(currency1.current);
            });
            textureCoin.on('update', () => {
                setCoin(currency2.current);
            });
        }
        ,[wrapper, currency1, currency2])

    return (
        <Container
            pivot = {[current.width/2, 0]}
            ref = {wrapper}
            {...props}
        >
            {wins.dollar ?
                <Text
                    ref = {currency1}
                    pivot={[(dollar.width)/2, 0]}
                    style={ style}
                    text={wins.dollar}
                    x = {0}
                >
                    <Sprite
                        pivot = {[-textureDollar.baseTexture.width*0.2, textureDollar.baseTexture.height/2]}
                        texture={textureDollar}
                        x = {dollar.width}
                        y={dollar.height /2}
                    />
                </Text>
                : null
            }
            {wins.coin ?
                <Text
                    ref = {currency2}
                    pivot={[(coin.width)/2, 0]}
                    style={ style}
                    text={wins.coin}
                    x = {dollar.width + (wins.dollar ? textureDollar.baseTexture.width*2.4 : 0)}
                >
                    <Sprite
                        pivot = {[-textureCoin.baseTexture.width*0.2, textureCoin.baseTexture.height/2]}
                        texture={textureCoin}
                        x = {coin.width}
                        y={coin.height /2}
                    />
                </Text>
                : null
            }
        </Container>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        bonusWin: state.currentGame.bonusSet.win,
        setWin: state.currentGame.mainSet.win,
    };
};
export default connect(mapStateToProps)(SetValues);