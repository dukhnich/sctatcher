import {SUITS} from "../../consts";

const initialState = {
    statusCharacter: "idle",
    status: "idle",
    suit: SUITS[0],
    open: {
        bonus: [false],
        set: [false,false,false,false,false,false]
    },
    bonusSet: {
        set: [SUITS[0]],
        win: {
            coin: 25,
            dollar: 0
        }
    },
    mainSet: {
        set: [SUITS[0],SUITS[2],SUITS[3],SUITS[4],SUITS[1],SUITS[2]],
        win: {
            coin: 0
        }
    }
};

const currentGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "currentGame/statusCharacter":
            return {
                ...state,
                statusCharacter: action.payload
            };
        case "currentGame/changeCardsStatus":
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
                open: initialState.open,
                status: "play",
                ...action.payload
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
