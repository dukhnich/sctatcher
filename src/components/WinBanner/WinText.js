import React from "react";
import {Text} from "react-pixi-fiber";
import * as PIXI from "pixi.js";


const fontSize = 116;
const style = new PIXI.TextStyle({
    fill: "#f45b4e",
    fontFamily: "DRAguSans-Black",
    fontSize: fontSize
});

function WinText(props) {
    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef()
    React.useEffect(()=> {
            setCurrent(wrapper.current);
        }
        ,[])

    return (
            <Text
                ref = {wrapper}
                pivot={[current.width/2, 0]}
                style={ style}
                text="YOU WIN"
                {...props}
            />
    );
}

export default WinText;
