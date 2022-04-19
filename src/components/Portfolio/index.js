import React from 'react';
import Project from '../Project';
import './portfolio.css'


function Portfolio() {
	const projects = [
		{
			name: 'Dinner Spinner',
			description:
				'An app that gives you a local dinner spot at random and tracks your dinner history.',
			image: 'dinner-spinner.png',
			deployed: 'https://thomburt.github.io/The-Dinner-Spinner/',
		},
		{
			name: 'Songwriters Lounge',
			description:
				'A podcast for all songwriters, musicians and producers from all over the world!',
			image: 'sl.png',
			deployed: 'https://vast-lake-01153.herokuapp.com/',
		},
		{
			name: 'Plant Pal',
			description:
				'A house-plant based social media channel to make friends, post tips and tricks and learn how to take care of your plant.',
			image: 'plant-pal.jpg',
			deployed: 'https://plant-pal-project.herokuapp.com/',
		},
		{
			name: 'Continu.us',
			description:
				'An e-commerce website built for this company to market and sell their products.',
			image: 'continuus1.png',
			deployed: 'https://continu.us/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-1.jpg',
			deployed: 'https://thomburt.github.io/weather-dashboard-TB/',
		},	
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header" style={{ textDecoration: "underline", textAlign: "center" }}>My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;