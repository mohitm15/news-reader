import React,{Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            news:[],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=fbd0ed465f3f46c5924789d3e4810180`;

        //fetching data
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                news:data.articles
            })
        })
        .catch((error)=>console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
          <NewSingle key={item.url} item={item} />
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

export default News;