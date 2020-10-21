import React from "react";
import {Container} from "react-pixi-fiber";
import {connect} from "react-redux";
import ScratchFrame from "./ScratchFrame";


function Set({set, ...props}) {

    const [current, setCurrent] = React.useState({
        width: 0,
        height: 0
    });

    const wrapper = React.useRef();


    React.useEffect(()=> {
            setCurrent(wrapper.current);
        }
        ,[wrapper])

    return (
        <Container
            pivot = {[current.width/2, 0]}
            ref = {wrapper}
            {...props}
        >
            {set.map((card, index) => (
                <ScratchFrame
                    key = {index}
                    card={card}
                    number={index}
                />

            ))}

        </Container>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        set: state.currentGame.mainSet.set,
    };
};
export default connect(mapStateToProps)(Set);