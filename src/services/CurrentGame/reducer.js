import {SUITS} from "../../consts";

const initialState = {
    currentGame: {},
    statusCharacter: "idle",
    status: "idle",
    suit: SUITS[0],
    open: {
        bonus: [false],
        // set: [false]
    },
    bonusSet: {
        set: [SUITS[0]],
        currency: "coin",
        winValue: 25
    }
};

const currentGameReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "currentGame/statusCharacter":
            return {
                ...state,
                statusCharacter: action.payload
            };
        case "currentGame/openCard":
            return {
                ...state,
                open: action.payload
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
