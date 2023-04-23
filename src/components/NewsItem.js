import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title,desc,imgUrl,url} = this.props;
    return (
      <div className='pack'>
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">View Details</a>
            </div>
        </div>
      </div>
    )
  }
}
