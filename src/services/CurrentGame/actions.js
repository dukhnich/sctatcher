import store from "../../store/configure-store";
import {BONUSRULES, MAINRULES, SUITS} from "../../consts";

const pick = (outcomesArr) => {
    const totalProbs = outcomesArr.reduce((prev, current) => prev + current.probability,0)
    const dice = Math.random()*totalProbs;
    let currentSum = 0;
    for (let i = 0; i < totalProbs; i++) {
        currentSum += outcomesArr[i].probability;
        if (dice <= currentSum) {
            return outcomesArr[i]
        }
    }
}

const createSet = (winSuit, winNumber, allSuits, length) => {
    const suits = allSuits.reduce((prev, suit) => {
            if (suit !== winSuit) {
                prev.push({suit: suit, probability: 1})
            }
            return prev
        },
        [])
    // console.log(suits)
    const set = [];
    for (let i = 0; i <length; i++) {
        set[i] = ((i < winNumber) ? winSuit : pick(suits).suit)
    }
    const mixSet = [];
    for (let i = 0; i <length; i++) {
        const position = Math.floor(Math.random()*set.length)
        mixSet[i] = set[position];
        set.splice(position, 1)
    }
    return mixSet
}

export const startGame = () => async (dispatch) => {
    const suit = pick(MAINRULES);
    const number = pick(suit.cardNumbersProperties);
    const bonus = pick(BONUSRULES);
    const set = createSet(suit.suit, number.numbersOfCards, SUITS, 6);

    const game =
        {
            suit: suit.suit,
            bonusSet: {
                set: [suit.suit],
                win: bonus.win
            },
            mainSet: {
                set: set,
                win: number.win
            }
        }

    dispatch({ type: "currentGame/start", payload: game });

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

