import React,{Component} from 'react';
import SingleSide from './SingleSide';

class Sidenews extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            sidenews:[],
        };
    }

    componentDidMount() {
     
    }

    renderItems() {
        return this.state.sidenews.map((item) => (
          <SingleSide key={item.url} item={item} />
        ));
      }
    

    render() {
        return (
            <div className="row" style={{backgroundColor:"#b7c1d4"}}>
                {this.renderItems()}
            </div>
        );
    }
}

export default Sidenews;