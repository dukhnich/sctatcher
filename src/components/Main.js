import React from "react";
import SpineCharacter from "./SpineCharacter";
import Game from "./Game";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Main = ({app, status, ...props}) => {
    const [pending, setPending] = React.useState(true);

    React.useEffect(()=> {
        if (status === "download") {
            setTimeout(() => {
                    setPending(false)
                }
                , 3000)
        }
    },[status])

    return pending ?
        (<SpineCharacter app={app} {...props}/>
        ): (
            <Game app={app} {...props}/>
        )

}

Main.propTypes = {
    app: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: state.sizes.status,

    };
};
export default connect(mapStateToProps)(Main);