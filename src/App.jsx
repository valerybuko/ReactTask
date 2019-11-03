import React from 'react';
import MenuView from './Components/views/MenuView';
import { BrowserRouter } from 'react-router-dom';

const App = props => (
  <div>
    <BrowserRouter>
      <MenuView/>
    </BrowserRouter>
  </div>
);
export default App;
