import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    static defaultProps = {
        pageSize : 8,
        category : "sports"
    }

    static propTypes = {
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d07191ffec144a22a2c07fe11f78ba98&page=1&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let modified_data = await data.json();
        this.setState({articles : modified_data.articles,totalResults : modified_data.totalResults,loading:false})
    }

    handlePrev = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d07191ffec144a22a2c07fe11f78ba98&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let modified_data = await data.json();
        this.setState({page : this.state.page - 1,articles : modified_data.articles,loading : false})
    }

    handleNext = async()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d07191ffec144a22a2c07fe11f78ba98&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url);
            let modified_data = await data.json();
            this.setState({page : this.state.page + 1,articles : modified_data.articles,loading : false})
        }
    }

  render() {
    return (
      <div className='container my-3'>
          <h1>NewsApp</h1>
          <div className="text-center">
                {this.state.loading && <Spinner/>}
          </div>
          <div className="row">
              {!this.state.loading && this.state.articles.map((ele)=>{
                    return <div className="col-md-4" key={ele.url}>
                                <NewsItem title={ele.title?ele.title.slice(0,45):""} desc={ele.description?ele.description.slice(0,80):""} imgUrl={ele.urlToImage?ele.urlToImage:"http://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/a68b8c65-d789-403e-8d08-52b4ac8585ab/gr2.jpg"} url={ele.url}/>
                            </div>})}
          </div>
          <div className="d-flex justify-content-between">
              <button disabled={this.state.page<=1} onClick={this.handlePrev} type="button" className="btn btn-dark">Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark">Next</button>
          </div>
      </div>
    )
  }
}

