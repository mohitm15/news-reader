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
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-05-17&sortBy=publishedAt&apiKey=fbd0ed465f3f46c5924789d3e4810180';

        //fetching data
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                news:data.articles
            })
        })
        .catch(console.error)
    }

    renderItems () {
        return this.state.news.map((item)=>(
            <NewSingle key={item.id} item={item}/>
        ));
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default News;