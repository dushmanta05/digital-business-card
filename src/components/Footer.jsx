import React from "react"
import Twitter from "/src/assets/Twitter Icon.png"
import Facebook from "/src/assets/Facebook Icon.png"
import Instagram from "/src/assets/Instagram Icon.png"
import GitHub from "/src/assets/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer-div">
            <img src={Twitter} alt="Twitter Icon"/>
            <img src={Facebook} alt="Facebook Icon"/>
            <img src={Instagram} alt="Instagram Icon"/>
            <img src={GitHub} alt="GitHub Icon"/>
        </div>
    )
}