"use strict";

import React from "react";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";
import Actions from "./actions/products";
import ProductStore from "./stores/products";

class Layout extends React.Component {
	mixins:[
		Reflux.listenTo(ProductStore, 'onFetchProducts')
	],
	componentDidMount() {
		Actions.FetchProducts();
	},
	onFetchProducts(data) {
		this.setState({products: data.products});
	},
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