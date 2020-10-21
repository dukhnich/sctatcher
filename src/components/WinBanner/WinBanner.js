import React from "react";
import {Sprite} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {connect} from "react-redux";
import {getPngName} from "../../consts";
import WinText from "./WinText";
import SetValues from "./SetValues";


const banner = getPngName("frame1");
const texture = PIXI.Texture.from(banner);

function WinBanner({scale, app}) {
    const t = PIXI.Texture.from(getPngName("dollar_icon"))
    const [w, setW] = React.useState(0)

    React.useEffect(()=> {
            t.on('update', () => {
                setW(t.baseTexture.width);
            });
        }
        ,[])
    return (
        <Sprite
            scale = {scale}
            pivot={[texture.baseTexture.width/2, 0]}
            x={(app.renderer.screen.width)/2}
            y={app.renderer.screen.height*0.12}
            texture={texture}
        >
            <WinText
                x={texture.baseTexture.width/2}
                y={texture.baseTexture.height*0.1}
            />
            {w ?
                <SetValues
                    x={(texture.baseTexture.width)/2}
                    y = {texture.baseTexture.height/2}
                    tDollar = {t}
                    w = {w}
                />
                :null
            }

        </Sprite>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        scale: state.sizes.scale,
    };
};
export default connect(mapStateToProps)(WinBanner);