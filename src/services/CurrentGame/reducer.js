const initialState = {
    currentGame: {},
    status: "idle",
};

const currentGameReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "currentGame/pending":
            return {
                ...state,
                status: "pending"
            };
        case "currentGame/start":
            return {
                ...state,
                currentUser: action.payload,
                status: "play"
            };
        case "currentGame/finish":
            return {
                ...state,
                status: "finish",
            };
        default:
            return state;
    }
};

export default currentGameReducer;
