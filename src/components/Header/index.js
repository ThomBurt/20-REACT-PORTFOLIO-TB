import React from "react";
import Nav from "../Nav";
import thomLogo from '../../assets/images/tb-white.png';

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
            <img src={thomLogo} className="my-2" style={{ width: "250px", margin: "10px" }} alt="tb-logo" />
			</div>
			<div>
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Nav>
			</div>
		</header>
	);
}

export default Header;