const initialState = {
    scale: 0.25,
    widthBg: 0,
    heightBg: 0,
    widthScreen: window.innerWidth,
    heightScreen: window.innerHeight
};

const sizesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "sizes/setSizes":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default sizesReducer;
