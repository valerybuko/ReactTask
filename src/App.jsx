import React from 'react';
import Button from './Components/Button/Button';

class App extends React.PureComponent {
  render () {
    const buttonHandleClick = () => { alert('button has been clicked'); };
    return (
      <div>
        <h2>Weather application</h2>
        <Button onClick={buttonHandleClick}>
          {'go to the page'}
        </Button>
      </div>
    );
  }
}

export default App;
