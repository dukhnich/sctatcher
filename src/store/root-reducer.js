import { combineReducers } from "redux";
import {currentGameReducer} from "../services/CurrentGame";
import {sizesReducer} from "../services/Sizes";


export default combineReducers(
{
            currentGame: currentGameReducer,
            sizes: sizesReducer
        }
);