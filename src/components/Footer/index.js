import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"


function Footer() {
	return (
		<footer className="footer">
			<div>
                <FontAwesomeIcon icon={faYoutube} className="icons"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon>
				{/* <a
					href="https://github.com/OwaisIslam"
					target="_blank"
					rel="noopener noreferrer" 
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/owaisislam/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/mister_garak"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a> */}
			</div>
		</footer>
	);
}

export default Footer;