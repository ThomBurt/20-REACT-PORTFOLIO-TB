import React, { useState } from "react";
import Card from "react-bootstrap/Card";


function Project(props) {
	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const siteLink = currentProject.deployed;


	return (
		<Card style={{ width: "20rem", marginRight: "20px", marginBottom: "20px" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/images/${image}`)}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title" style={{ width: "20rem", marginBottom: "20px", textDecoration: "underline", fontSize: "25px" }}>{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={siteLink} target="_blank" className="card-link" style={{ textDecoration: "underline" }}>
						{name}  ⬅️
					</Card.Link>
					<br></br>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
