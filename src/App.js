import React from 'react';
import { Stage, AppContext } from "react-pixi-fiber";
import SpineCharacter from "./components/SpineCharacter";
import Game from "./components/Game";
import {Provider} from "react-redux";
import store from "./store/configure-store";


const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
  // autoStart:false,
  height: height,
  width: width
};

const Main = ({app, ...props}) => {
    const [pending, setPending] = React.useState(true);

    React.useEffect(()=> {
        // app.loader
        //     .add('spineCharacter', '/assets/char_spine_v5/Red.json')
        setTimeout(()=> {
                setPending(false)
            }
            ,3000)
    },[])

    return pending ?
        (<SpineCharacter app={app} {...props}/>
        ): (
            <Game app={app} {...props}/>
        )

}

function App() {
    const [pending, setPending] = React.useState(true);

    React.useEffect(()=> {

        setTimeout(()=> {
            setPending(false)
            }
            ,3000)
    },[])

  return (

      <Stage options={OPTIONS}>
          <Provider store={store}>
          { (
              <AppContext.Consumer>
              {app => (<Main app={app}/>)}
          </AppContext.Consumer>
          )
          }
          </Provider>
      </Stage>
  );
}

export default App