import store from "../../store/configure-store";
export const startGame = () => async (dispatch) => {
    try {
        dispatch({ type: "currentGame/start", payload: {} });

    } catch (error) {
        console.log(error)
        // dispatch({ type: "loadUser/rejected" });
    }
};

export const changeCardStatus = (type, number) => async (dispatch) => {
    const newOpen = {...store.getState().currentGame.open};
    if (newOpen[type] && newOpen[type].length > number) {
        newOpen[type] = [...newOpen[type]];
        newOpen[type][number] = !newOpen[type][number];
    }
    dispatch({ type: "currentGame/changeCardsStatus", payload: newOpen});

    let isEnd = Object.values(newOpen).reduce((prev, current) => {
        return current.reduce((prevCard, isOpen) =>
            isOpen ? prevCard : false, true) ?
            prev : false
        }, true)
    if (isEnd) {
        dispatch({ type: "currentGame/finish"});
    }
};