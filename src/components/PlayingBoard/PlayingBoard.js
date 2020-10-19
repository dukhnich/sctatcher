import React from "react";
import {Container} from "react-pixi-fiber";
import { connect } from "react-redux";
import BoardHeader from "./BoardHeader";


function PlayingBoard({width, height, ...props}) {
    const [container, setContainer] = React.useState({
        width: 0,
        height: 0
    });
    const wrapper = React.useRef();
    React.useEffect(()=> {
            setContainer(wrapper.current);
        }
        ,[])
    return (
        <Container
            ref = {wrapper}
            pivot = {[container.width / 2, container.height/2]}
            x={(width)/2}
            y={(height*1.137)/2}
        >
            <BoardHeader
                x={(container.width)/2}
                y={(container.height*1.145)/2}
            />
        </Container>

    );
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        width: state.sizes.widthBg,
        height: state.sizes.heightBg,
    };
};
export default connect(mapStateToProps)(PlayingBoard);