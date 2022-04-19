import React from 'react';
import Project from '../Project';
import './portfolio.css';


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
				'A PODCAST FOR ALL SONGWRITERS, MUSICIANS AND PRODUCERS FROM ALL OVER THE WORLD..',
			image: 'sl.png',
			deployed: 'https://vast-lake-01153.herokuapp.com/',
		},
		{
			name: 'Plant Pal',
			description:
				'A HOUSE-PLANT BASED SOCIAL MEDIA CHANNEL TO MAKE FRIENDS, POST TIPS AND TRICKS AND LEARN HOW TO TAKE CARE OF YOUR PLANT. UTILIZING THE YELP API TO FIND YOUR NEAREST PLANT STORES.',
			image: 'plant-pal.jpg',
			deployed: 'https://plant-pal-project.herokuapp.com/',
		},
		{
			name: 'Continu.us',
			description:
				'AN E-COMMERCE SITE, FEATURING PRODUCTS SOLD FROM A COMMERCIAL ELECTRONICS COMPANY.',
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
				<h1 className="page-header">My Portfolio</h1>
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
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;