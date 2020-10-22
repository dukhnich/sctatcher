const initialState = {
    scale: 0.25,
    widthBg: 0,
    heightBg: 0,
    widthScreen: window.innerWidth,
    heightScreen: window.innerHeight,
    status: "idle"
};

const sizesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "sizes/setSizes":
            return {
                ...state,
                ...action.payload
            };
        case "sizes/setStatus":
            // console.log(action)
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
};

export default sizesReducer;
