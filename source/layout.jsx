"use strict";

import React from "react";

class Layout extends React.Component {
	render() {
		<div>
			{ React.cloneElement(
				this.props.children,
				this.state
			)}
		</div>
	}
}