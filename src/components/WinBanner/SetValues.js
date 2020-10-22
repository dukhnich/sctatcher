import React from "react";
import {Container, Text} from "react-pixi-fiber";
import {connect} from "react-redux";
import * as PIXI from "pixi.js";
import CurrencySymbol from "./CurrencySymbol";

const fontSize = 126;
const style = new PIXI.TextStyle({
    fill: "#311d1f",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});


function SetValues({bonusWin, setWin, w, ...props}) {
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
            if (wrapper.current) {
                setCurrent(wrapper.current);
            }
            if (currency1.current) {
                setDollar(currency1.current);
            }
            if (currency2.current) {
                setCoin(currency2.current);
            }
        }
        ,[wrapper.current, currency1.current, currency2.current])

    return (
        <Container
            pivot = {[current.width/2, 0]}
            ref = {wrapper}
            {...props}
        >
                <Text
                    ref = {currency1}
                    pivot={[(dollar.width)/2, 0]}
                    style={ style}
                    text={wins.dollar || 0}
                    x = {0}
                    visible = {wins.dollar>0}
                >
                    <CurrencySymbol
                        x={dollar.width}
                        y={dollar.height / 2}
                        name={"dollar_icon"}
                    />
                </Text>

                <Text
                    ref = {currency2}
                    pivot={[(coin.width)/2, 0]}
                    style={ style}
                    text={wins.coin || 0}
                    x = {dollar.width + (wins.dollar ? w*2.4 : 0)}
                    visible = {wins.coin>0}

                >
                    <CurrencySymbol
                        x={coin.width}
                        y={coin.height / 2}
                        name={"coin_icon_big"}
                    />
                </Text>

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