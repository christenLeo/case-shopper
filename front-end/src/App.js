import { GlobalState } from './Global/GlobalState.js';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { HolePage } from './styled.js';

import React from "react";

const App = () => {
  return (
    <GlobalState>
      <HolePage>
        <HomePage/>
      </HolePage>  
    </GlobalState>
  );
};

export default App;
