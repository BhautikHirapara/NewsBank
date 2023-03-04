import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imgURL, newsURL} = this.props;
    return (
      <div>
        <div className="card" style={{width:'18rem'}}>
            <img src={!imgURL ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DbhG4bav0M98FVHKzl-_o6Z9KsiqMqhPeg&usqp=CAU" : imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
