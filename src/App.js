import React from 'react';
import { Sprite, Stage, Text, AppContext } from "react-pixi-fiber";
import Character from "./components/Character";

const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
  // autoStart:false,
  height: height,
  width: width
};

function App() {
    const [pending, setPenging] = React.useState(true);

    React.useEffect(()=> {
        setTimeout(()=> setPenging(false)
            ,3000)
    },[])

  return (
      <Stage options={OPTIONS}>

          {pending ? (
              <AppContext.Consumer>
              {app =>  (
                  <Character x={width / 2} y={height / 2} app={app}/>
              )}
          </AppContext.Consumer>
          ) : (
              <Text text="Hello World!" x={200} y={200}/>
          )
          }
      </Stage>
  );
}

export default App;
