import store from "../../store/configure-store";
export const startGame = () => async (dispatch) => {
    try {
        dispatch({ type: "currentGame/start", payload: {} });

    } catch (error) {
        console.log(error)
        // dispatch({ type: "loadUser/rejected" });
    }
};

export const openCard = (type, number) => async (dispatch) => {
    try {
        const newOpen = {...store.getState().currentGame.open};
        if (newOpen[type] && newOpen[type].length > number) {
            newOpen[type][number] = true;
        }
        dispatch({ type: "currentGame/openCard", payload: newOpen});
        let isEnd = Object.values(newOpen).reduce((prev, current) => {
            return current.reduce((prevCard, isOpen) =>
                isOpen ? prevCard : false, true) ?
                prev : false
            }, true)
        if (isEnd) {
            dispatch({ type: "currentGame/finish"});
        }

    } catch (error) {
        console.log(error)
        // dispatch({ type: "loadUser/rejected" });
    }
};
