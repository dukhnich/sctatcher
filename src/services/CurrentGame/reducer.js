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
        case "currentGame/resolved":
            return {
                ...state,
                currentUser: action.payload,
                status: "resolved"
            };
        case "currentGame/rejected":
            return {
                ...state,
                status: "rejected",
            };
        default:
            return state;
    }
};

export default currentGameReducer;
