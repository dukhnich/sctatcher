

export const startGame = () => async (dispatch) => {
    try {
        dispatch({ type: "currentGame/start", payload: {} });

    } catch (error) {
        console.log(error)
        // dispatch({ type: "loadUser/rejected" });
    }
};
