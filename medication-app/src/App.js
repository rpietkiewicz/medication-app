import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <header>
          <form id="to-do-form">
            <input type="text" placeholder="Dodaj leki.."/>
            <button type="submit">Dodaj</button>
          </form>
        </header>
       </div>
    );
  }
}

export default App;
