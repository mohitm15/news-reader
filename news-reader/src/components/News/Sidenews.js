import axios from 'axios';
import React,{Component} from 'react';
import SingleSide from './SingleSide';
import Error from './Error'

class Sidenews extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            sidenews:[],
            error:false,
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
        .catch((error)=>{
            this.setState({
                error:true
            })
        });
    }

    //shows mistake of nothing returned from render() when I intentionally make error.
    //What is expected is to display <Error/> component

    renderItems() {
        if(!this.state.error) 
        {
            return this.state.sidenews.map((item) => (
                <SingleSide key={item.url} item={item} />
                ));
        }
        else {
            return <Error/>
        }
        
      };
    

    render() {
        return (
            <div className="row" style={{backgroundColor:"#b7c1d4"}}>
                {this.renderItems()}
            </div>
        );
    }
}

export default Sidenews;