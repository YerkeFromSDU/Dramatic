function Banner(){
    return(
        <div class="banner">
            <img id="movie-name" src="/image.png" alt="" />
            <div class="container">
                <p id="description">Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</p>
                <p id="genre">GENRES</p>
                <p id="genre-value">Romance, Drama</p>
                <div class="buttons">
                    <a id="watch">WATCH &#9654;</a>
                    <a id="mylist">MY LIST <span>&#43;</span> </a>
                </div>
                <div class="rating">
                    <img src="/imdb.png" alt="" width="57px" height="27px"/>
                    <p id="imdb-value">7.3</p>
                    <p id="certificate">U/A</p>
                    <p id="quality">4K</p>
                    <p id="year">2015</p>
                </div>
                
            </div>
        </div>
    )
}
export default Banner