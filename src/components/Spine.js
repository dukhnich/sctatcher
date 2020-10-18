import * as PIXI from "pixi.js";
import {CustomPIXIComponent} from "react-pixi-fiber";
window.PIXI = PIXI;
require("pixi-spine")
export const SpineAnimation = CustomPIXIComponent({
    customDisplayObject(props) {
        return new window.PIXI.spine.Spine(props.spine.spineData)
    }
},
    "Spine")