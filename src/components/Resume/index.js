import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header" style={{ textDecoration:"underline" }}>My Resumé</h1>
			</div>
			<div className="bottom-spacing" style={{ textAlign: "center" }}>
                <a href={("https://ucarecdn.com/07e33b70-df75-4245-a0e1-218ad5664ce2/ThomBurtResume.pdf")} >
					<h4 style={{ textDecoration:"underline" }}>View my Resumé by Clicking here!</h4>
				</a>
                <a href={require("../../assets/files/ThomBurtResume.pdf")} download>
					<h4 style={{ textDecoration:"underline" }}>Download my Resumé by Clicking here!</h4>
				</a>
			</div>
			
		</section>
	);
}

export default Resume;
