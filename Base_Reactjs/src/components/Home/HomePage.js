import videoHomePage from "../../assets/video-homepage.mp4"
const HomePage=(props)=>{
    return(
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/webm" />
            </video>
            <div className="homepage-content">
                <div className="tittle-one">Formsthat breakthe norm</div>
                <div className="tittle-two">Get more data—like signups, feedback, and anything else—with forms designed to be</div>
                <div className="tittle-three">
                    <button>Get started—it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage