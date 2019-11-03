import React from 'react';
import Button from './Components/Button/Button';
import List from './Components/List/List';
import { listCitiesWeatherOptions, listCitiesOptions, logoUrl } from '../mock/data/data';
import styles from './App.scss';

class App extends React.PureComponent {
  render () {
    const buttonHandleClick = () => { alert('button has been clicked'); };
    return (
      <div>
        <img src={logoUrl} alt='logo' className={styles.logo}/>
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
