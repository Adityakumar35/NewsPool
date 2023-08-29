import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
// export class News extends Component {
    // static defaultProps = {        //in function based components proptypes and default props are written in end
    //     country: 'in',
    //     pageSize: 9,
    //     country: 'general'
    // }
    // static propTypes = {
    //     pageSize: PropTypes.number,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    //   }

    // for function based
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const uppercaseLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // constructor(props) {
        //     super(props);
        //     console.log("constructor of news component")
    //     this.state = {
    //         articles : [],
    //         loading: true,
    //         page : 1,
    //         totalResults: 0
    //     }
    //     document.title = 'NewsPool - ' + this.uppercaseLetter(this.props.category);
    //   } 
    
    //   async updateNews(){
        const updateNews = async()=>{
        // this.props.setProgress(10);         //this.props to props
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7c8ab64895a04a1f83df7a28dc8d2697&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading : true})
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(50);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false
        // })
        props.setProgress(100);    
      }

      useEffect(() => {
        document.title = 'NewsPool - ' + uppercaseLetter(props.category);
        updateNews();
      }, [])
      

    //   async componentDidMount(){
    //     this.updateNews();
    //   }

    // const handlePrevClick = async ()=>{     
    //     setPage(page - 1);
    //     updateNews();
    // }
    
    // const handleNextClick = async ()=>{
    //         // this.setState({page: this.state.page + 1});
    //         setPage(page + 1);
    //         updateNews();
    // }

    const fetchMoreData = async () => {
    // const setTimeout(async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7c8ab64895a04a1f83df7a28dc8d2697&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        // this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults}) 
        // }, 1000);
      };

//   render() {
    return (
    //   <div className='container my-3'>               //removing this container in order to remove horizontal scrollbar
    <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop: '80px'}} >NewsPool - Top  {uppercaseLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
                
            <div className="row">
                {/* {!this.state.loading && this.state.articles.map((element)=>{         //while using next and previous button */}
                {/* {this.state.articles.map((element)=>{                        //while using class components */}
                {articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            </div>
        </InfiniteScroll>

            {/* use it for prev next buttons */}
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      {/* </div> */}
    </>
    )
//   }
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    country: 'general'
}
News.propTypes = {
    pageSize: PropTypes.number,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
export default News