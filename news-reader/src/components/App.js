import './App.css';
import React,{Component} from 'react';
import News from './News/News';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      news1:{
        type:'top-headlines',
        query:'country=us'
      },
      news2:{
        type:'everything',
        query:'domains=techcrunch.com,thenextweb.com'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>My Feed</h4>
        </header>
        <News news={this.state.news1}/>
        <News news={this.state.news2}/>
      </div>
    );
  }
}

export default App;
