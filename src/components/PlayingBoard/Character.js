import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SpineAnimation} from "../Spine";

function Character({app, widthBg, heightBg, statusCharacter}) {
    const ref = React.useRef()
    React.useEffect(()=>{
        // console.log(ref.current);
        ref.current.state.setAnimation(0, `red_${statusCharacter}_loop`, true)
        }

        ,[statusCharacter])
    return (
        <SpineAnimation
            ref={ref}
            spine = {app.stage.getChildByName('spineCharacter')}
            x ={widthBg * 0.32}
            y = {heightBg*0.32}

        />

    );
}

Character.propTypes = {
    app: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        widthBg: state.sizes.widthBg,
        heightBg: state.sizes.heightBg,
        statusCharacter: state.currentGame.statusCharacter,
    };
};
export default connect(mapStateToProps)(Character);