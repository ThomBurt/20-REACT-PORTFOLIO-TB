import React from "react";
// import '../styles/Portfolio.css';

function Portfolio(props) {
    return (
        <div id="portfolio">
            <div className="container mt-5">
                <div className="col-4">
                    <a href={props.url}>
                        <div className="card">
                            <img src={props.image} alt={props.title} className="card-img image" />
                        </div>
                        <div className="middle">
                            <h4 className="text">{props.title}</h4>
                            <p className="text">{props.category}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;