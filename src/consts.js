export const SUITS = ["bonfire", "bow", "leaf", "rope", "tent"];
export const CURRENCIES = ["dollar", "coin"];


export const getPngName = (name) => `/assets/magic_forest_${name}.png`

export const MAINRULES = [
    {
        suit: SUITS[0],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 5
            },
            {
                win:{},
                probability: 5
            },
            {
                win:{
                    coin: 25
                },
                probability: 10
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },
    {
        suit: SUITS[1],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 6
            },
            {
                win:{},
                probability: 6
            },
            {
                win:{
                    coin: 30
                },
                probability: 8
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },
    {
        suit: SUITS[2],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 7
            },
            {
                win:{},
                probability: 7
            },
            {
                win:{
                    coin: 35
                },
                probability: 6
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },
    {
        suit: SUITS[3],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 8
            },
            {
                win:{},
                probability: 8
            },
            {
                win:{
                    coin: 50
                },
                probability: 4
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },
    {
        suit: SUITS[0],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 5
            },
            {
                win:{},
                probability: 5
            },
            {
                win:{
                    coin: 25
                },
                probability: 10
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },{
        suit: SUITS[4],
        cardNumbersProperties:[
            {
                win: {},
                probability: 0
            },
            {
                win:{},
                probability: 9
            },
            {
                win:{},
                probability: 9
            },
            {
                win:{
                    coin: 100
                },
                probability: 2
            },
            {
                win:{},
                probability: 0
            },
            {
                win:{},
                probability: 0
            },
        ]
    },
]
for (const suit of MAINRULES) {
    suit.probability = suit.cardNumbersProperties.reduce((prev, current) => prev + current.probability,0);
    for (let i = 0; i < suit.cardNumbersProperties.length; i++) {
        suit.cardNumbersProperties[i].numbersOfCards = i
    }
}

export const BONUSRULES = [
    {
        win: {
            dollar: 1
        },
        probability: 20
    },
    {
        win: {
            coin: 25
        },
        probability: 80
    },
]
