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
        console.log(wrapper.current.width)
            if (wrapper.current && wrapper.current.width && wrapper.current.width !== current.width) {
                setCurrent(wrapper.current);
            }
        }
        ,[wrapper.current])

    return (
        <Container
            pivot = {[0, current.height/2]}
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