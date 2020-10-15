import { combineReducers } from "redux";
import {currentGameReducer} from "../services/CurrentGame";


export default combineReducers(
{
            currentGame: currentGameReducer
        }
);