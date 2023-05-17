import "./About.css";
import Header from '../Header'
import Banner from '../Banner'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import More from "../More";
function About(){
    return(
        <>
        <Header />
        <Banner />
        <Sidebar />
        <div className="info-about">
           <div className="audio-title">
                <p className="audio">AUDIO</p>
                <p>English - Audio Description,English [Original]</p>
            </div>
            <div className="sub-title">
                <p className="sub">SUBTITLES</p>
                <p>English, Hindi</p>
            </div> 
        </div>
        <div className="first-container">
            <div className="trailer">
                <p>TRAILER</p>
                <iframe width="307" height="170"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div className="cast">
                <p>CAST AND CREW INFO</p>
                <div className="cast-cards">
                    <div className="cast-card">
                        <img src="/cast.svg"  width="110px"  />
                        <p>Deepika Paduko...</p>
                        <p className="role">As Piku</p>
                    </div>
                    <div className="cast-card">
                        <img src="/cast.svg"  width="110px" />
                        <p>Deepika Paduko...</p>
                        <p className="role">As Piku</p>
                    </div>
                    <div className="cast-card">
                        <img src="/cast.svg"  width="110px" />
                        <p>Deepika Paduko...</p>
                        <p className="role">As Piku</p>
                    </div>
                    <div className="cast-card">
                        <img src="/cast.svg"  width="110px" />
                        <p>Deepika Paduko...</p>
                        <p className="role">As Piku</p>
                    </div>
                    <div className="cast-card">
                        <img src="/cast.svg"  width="110px" />
                        <p>Deepika Paduko...</p>
                        <p className="role">As Piku</p>
                    </div>
                    
                </div>
                
                
            </div>

        </div>
        <More />
        <div className="space"></div>
        <Footer />

        </>
    );
}
export default About;