import React from 'react';
import Button from './Components/Button/Button';
import List from './Components/List/List';
import { listOptions } from '../mock/data/data';

class App extends React.PureComponent {
  render () {
    const buttonHandleClick = () => { alert('button has been clicked'); };
    return (
      <div>
        <h2>Weather application</h2>
        <Button onClick={buttonHandleClick}>
          {'go to the page'}
        </Button>
        <List options={listOptions}/>
      </div>
    );
  }
}

export default App;
