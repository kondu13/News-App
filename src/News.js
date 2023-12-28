export default function News(props){

    console.log(props)
    return(
        <div className='news'>
            <div className='news-img'>
                <img src = {props.article.urlToImage} />
                
            </div>  
            <h1> {props.article.title} </h1>
            <p>{props.article.description?.substring(0,100).concat('...')} <a href={props.article.url} target = "_blank" >Read more</a></p>
            

            <div className="source">
                <p>Author: {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
    )
}