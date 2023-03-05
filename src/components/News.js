import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    console.log("hii")
    this.state = {
      articles : [],
      loading : false,
      page:1
    }
  }

  async update(){
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3661314c2074ee38e0691d4dadcbb99&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalNews: parsedData.totalResults
    })
  }

  async componentDidMount(){
    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3661314c2074ee38e0691d4dadcbb99&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   totalNews: parsedData.totalResults
    // })
    this.setState({page: this.state.page})
    this.update()
  }


  handleNextPage = async () => {
    // this.setState({loading: true})
    // let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3661314c2074ee38e0691d4dadcbb99&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   page: this.state.page + 1
    // })
    this.setState({page: this.state.page+1})
    this.update()
  }

  handlePreviousPage = async () => {
    // this.setState({loading: true})
    // let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3661314c2074ee38e0691d4dadcbb99&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   page: this.state.page - 1
    // })
    this.setState({page: this.state.page-1})
    this.update()
  }

  render() {
    
    return (
      <div>

        <div className="container my-4">
      
          <h1 className='text-center'>NewsBank - Top Headlines</h1> 
        <button disabled={this.state.page <=1} onClick={this.handlePreviousPage}>Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalNews/6)} onClick={this.handleNextPage}>Next</button>
          { this.state.loading && <Spinner/>}
            <div className="row m-5">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} source={element.source.name} description={element.description} imgURL={element.urlToImage} author={element.author} date={element.publishedAt} newsURL={element.url}/>
                </div>
              })}
            </div>
      
        </div>

      </div>
    )
  }
}

export default News