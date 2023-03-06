import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll  from 'react-infinite-scroll-component';
export class News extends Component {

  Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("hii")
    this.state = {
      articles : [],
      loading : false,
      page:1
    }
    document.title = `${this.Capitalize(this.props.category)} - NewsBank`
  }

  async componentDidMount(){
    this.props.setProgress(10);
    this.setState({loading: true, page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
    this.props.setProgress(100);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalNews: parsedData.totalResults
    })
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalNews: parsedData.totalResults
    })
  }

  render() {
    
    return (
      <div>

        <div className="container my-4">      
          <h1 className='text-center'>NewsBank - Top {this.Capitalize(this.props.category)} Headlines</h1> 
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="row m-5">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} source={element.source.name} description={element.description} imgURL={element.urlToImage} author={element.author} date={element.publishedAt} newsURL={element.url}/>
                </div>
              })}
            </div>

          </InfiniteScroll>
      
        </div>

      </div>
    )
  }
}

export default News