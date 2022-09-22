import React from "react"
import Image from "/src/assets/Dilu.jpg"
export default function Info() {
    return (
        <section>
            <div className="info-div">
                <img src={Image} alt="Profile picture" className="info-img"/>
            </div>
            <h1 className="info-h1">Dushmanta Behera</h1>
            <p className="info-p1">Frontend Developer</p>
            <p className="info-p2">github.com/dilub4</p>
            
            <div className="info-button">
                <button className="email-button"><img src="/src/assets/Icon email.png" alt="email icon"/> &nbsp;Email</button>
                <button className="linkedin-button"><img src="/src/assets/Vector.png" alt="LinkedIn icon"/> &nbsp;LinkedIn</button>
            </div>
        </section>
        
    )
}