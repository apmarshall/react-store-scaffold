'use strict'
import React from 'react';
import { render } from 'react-dom';
class App extends React.Component {
    render() {
        return (
            <section>
                <h1>My scaffold</h1>
                <p>Hello world</p>
            </section>
        );
    }
}

render (
    <App />,
    document.getElementById('container')
);  
