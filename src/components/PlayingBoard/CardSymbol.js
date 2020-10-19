import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {getPngName} from "../../consts";

function CardSymbol({card, container, ...props}) {
    const texture = PIXI.Texture.from(getPngName(card))

    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef();

    React.useEffect(()=> {
            texture.on('update', () => {
                setCurrent(wrapper.current);
                // console.log(texture.baseTexture)
                // console.log(texture.baseTexture.width, current.width)
            });
        }
        ,[])
    return (

        <Sprite
            ref = {wrapper}

            x={(container.width - current.width)/2 }
            y={(container.height - current.height)/2}
            texture={texture}
        />
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        card: state.currentGame.bonusSet.set[0],

    };
};
export default connect(mapStateToProps)(CardSymbol);