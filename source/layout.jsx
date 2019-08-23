"use strict";

import React from "react";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";

class Layout extends React.Component {
	render() {
		return(
			<div>
				<Menu />
				{ React.cloneElement(
					this.props.children,
					this.state
				)}
				<Footer />
			
			</div>
		);
	}
}