import './App.css';
import React,{Component} from 'react';
import News from './News/News';
import Sidenews from './News/Sidenews';

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
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue-grey darken-3">
              <a href="#" className="brand-logo center ">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
          </div>
          <div className="col s4">
            <Sidenews />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
