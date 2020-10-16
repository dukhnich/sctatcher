const initialState = {
    currentGame: {},
    status: "idle",
    scale: 1,
    width: 0,
    height: 0
};

const currentGameReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "currentGame/setScale":
            return {
                ...state,
                scale: action.payload
            };
        case "currentGame/setWidth":
            return {
                ...state,
                width: action.payload
            };
        case "currentGame/setHeight":
            return {
                ...state,
                height: action.payload
            };
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
