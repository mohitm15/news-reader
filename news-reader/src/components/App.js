import './App.css';
import React,{Component} from 'react';
import News from './News/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>My Feed</h4>
        </header>
        <News />
      </div>
    );
  }
}

export default App;
