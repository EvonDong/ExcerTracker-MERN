import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-black small text-center text-white-50 navbar navbar-fixed-bottom">
                <div className="container">Copyright © 2020 ExcerTracker. All rights reserved. </div>
            </footer>
        )
    }
}

export default Footer;