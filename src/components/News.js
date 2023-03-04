import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("hii")
    this.state = {
      articles : [],
      loading : false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8d68444a6b2e417aa43f2b204bc793ff";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div>

        <div className="container my-4">
        <h1>NewsBank - Top Headlines</h1>

        <div className="row m-5">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imgURL={element.urlToImage} newsURL={element.url}/>
            </div>
          })}
        </div>


        </div>
      </div>
    )
  }
}

export default News