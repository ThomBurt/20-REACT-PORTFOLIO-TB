import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"


function Footer() {
	return (
		<footer className="container">
			<div>
                <a href="https://github.com/ThomBurt">
                <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/thomburt/">
                <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon>
                </a>
			</div>
		</footer>
	);
}

export default Footer;