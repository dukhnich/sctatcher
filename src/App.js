import React from 'react';
import { Stage, AppContext } from "react-pixi-fiber";
import {Provider} from "react-redux";
import store from "./store/configure-store";
import Main from "./components/Main";


const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
  height: height,
  width: width
};

function App() {

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