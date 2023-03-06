import React from 'react'

const NewsItem = (props) =>  {
    
    let {title, description, imgURL, newsURL, author, date, source} = props;
    return (
      <div className='m-3'>
        <div className='card' style={{width:'18rem'}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source} </span>
            <img src={!imgURL ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DbhG4bav0M98FVHKzl-_o6Z9KsiqMqhPeg&usqp=CAU  2" : imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'> <small className='text-muted'> By {(!author ? "Unknown" :author)} on {new Date(date).toGMTString()}</small> </p>
                <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
