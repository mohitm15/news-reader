import axios from 'axios';
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
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=fbd0ed465f3f46c5924789d3e4810180`;
        
        //using axios
        axios.get(url)
        .then((response)=>{
            this.setState({
                sidenews:response.data.articles
            })
        })
        .catch((error)=>console.log(error));
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