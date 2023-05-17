function Trailer(){
    return(
        <div className="movie-container">
            <img src="" alt="" />
            <p id="movie-name">Piku(2015)</p>
            <div className="gradient">
                <svg height="210" width="500">
                    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
                    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />     
                    <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
                </svg>
                <div className="duration">
                    <p>20:45</p>
                    <p>2:03:45</p>
                </div>
                
            </div>
        </div>
    );
}
export default Trailer;