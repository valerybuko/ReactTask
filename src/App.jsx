import React from 'react';
import Button from './Components/Button/Button';
import List from './Components/List/List';
import { listCitiesWeatherOptions, listCitiesOptions } from '../mock/data/data';

class App extends React.PureComponent {
  render () {
    const buttonHandleClick = () => { alert('button has been clicked'); };
    return (
      <div>
        <Button onClick={buttonHandleClick}>
          {'show cities'}
        </Button>
        <Button onClick={buttonHandleClick}>
          {'back'}
        </Button>
        <List options={listCitiesWeatherOptions}/>
        <List options={listCitiesOptions}/>
      </div>
    );
  }
}

export default App;
