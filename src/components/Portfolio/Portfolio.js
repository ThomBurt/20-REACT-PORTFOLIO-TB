import React from "react";
import './portfolio.css';
import dinnerSpinner from "../../assets/images/dinner-spinner.png";
import plantPal from "../../assets/images/plant-pal.jpg"
import weather from "../../assets/images/weather-1.jpg"
import songwritersLounge from "../../assets/images/sl.png"
import continuus from "../../assets/images/continuus.png"
// import '../styles/Portfolio.css';

function Portfolio(props) {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            
            <div className="container">
                <a href="https://thomburt.github.io/The-Dinner-Spinner/">
                <img src={dinnerSpinner} alt="dinnerSpinner" style={{ width: "100px" }}></img>
                </a>
                <h3>Dinner Spinner</h3>
            </div>

            <div className="container">
                <a href="https://continu.us/">
                <img src={continuus} alt="continuus" style={{ width: "100px" }}></img>
                </a>
                <h3>Continu.us</h3>
            </div>

            <div className="container">
                <a href="https://plant-pal-project.herokuapp.com/">
                <img src={plantPal} alt="Plant Pal" style={{ width: "100px" }}></img>
                </a>
                <h3>Plant Pal</h3>
            </div>

            <div className="container">
                <a href="https://thomburt.github.io/weather-dashboard-TB/">
                  <img src={weather} alt="weather" style={{ width: "100px" }}></img>
                </a>
                <h3>Weather App</h3>
            </div>

            <div className="container">
                <a href="https://vast-lake-01153.herokuapp.com/">
                    <img src={songwritersLounge} alt="songwritersLounge" style={{ width: "100px" }}></img>
                </a>
                <h3>Songwriters Lounge</h3>
            </div>
         

        </div>
    )
};

export default Portfolio;