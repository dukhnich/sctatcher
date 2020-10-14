import React from 'react';
import { Sprite, Stage, Text, AppContext } from "react-pixi-fiber";
import Character from "./components/Character";
import Game from "./components/Game";

const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
  // autoStart:false,
  height: height,
  width: width
};

const viewHeight = (height / (window.devicePixelRatio || 1));

function App() {
    const [pending, setPending] = React.useState(true);

    React.useEffect(()=> {

        console.log("effect")
        setTimeout(()=> {
                console.log("setTimeout")
            setPending(false)
            }
            ,3000)
    },[])

  return (
      <Stage options={OPTIONS}>

          { (
              <AppContext.Consumer>
              {app => pending ? (
                 console.log(1), <Character x={width / 2} y={height / 2} app={app}/>
              ): (
                  <Game  x={width / 2} y={height / 2}  app={app} height={height} viewHeight={viewHeight}/>
              )}
          </AppContext.Consumer>
          )
          }
      </Stage>
  );
}

export default App;
