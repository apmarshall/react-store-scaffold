"use strict";
import React from "react";

class Home extends React.Class {
    render() {
        return(
            <h1>My webshop!</h1>
            
            <p>Welcome to my webshop. This is a simple information unit where you can showcase your best products or tell a little about your webshop.</p>
            
            <p>
                <LinkContainer to="/products">
                    <Button bsStyle="primary" to="/products">View products</Button>
                </LinkContainer>
            </p>
        );
    }
}

module.exports = Home;