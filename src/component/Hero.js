import {FaEnvelope, FaLinkedin} from "react-icons/fa"

function Hero(){
    return (
        <div>
           
            <div className="hero-header">
                <h2 className="word">Melamie</h2>
                <h3 className="words">Web Developer</h3>
                <p> Grootness.com</p>
            </div>
            <div className="hero-container">
            <div className="btn-container">
                    <p  className="btn grey">
                       <span> <FaEnvelope/> </span>
                        Email
                    </p>
                    <p className="btn blue">
                        <span> <FaLinkedin/></span>
                          LinkedIn</p>
                </div>
                <div className="hero-info">
                    <h2>Phone Number</h2>
                    <p className="space"> 
                        +234 7013 793 168
                    </p>
                    <h2>Meum</h2>
                        <p className="space"> Dragon and Dinosaurs enthusiast, Multiverse Believer</p>
                </div>
            </div>
            
            
        </div>
        
    )

}

export default Hero
