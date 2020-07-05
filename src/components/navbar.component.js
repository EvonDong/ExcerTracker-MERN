import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const countdownStyle = {
    fontSize: 14,
    color: "red",
    textAlign: "right",
}
const countdownIcon = {
    color: "red",
}
export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
            <Link to="/" className="navbar-brand"><img width="70px" src={require('../excer-logo.ico')} /><h5>ExcerTracker</h5></Link>
            <div className="container">
                <i className="fas fa-hourglass-half fa-3x" style={countdownIcon}></i><a href="./timer/#timer" className="navbar-brand js-scroll-trigger float-right" style={countdownStyle}><b> Countdown <br></br>to D-Day</b></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/exerciselist" className="nav-link js-scroll-trigger"><h5>Exercises</h5></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link"><h5>Create Exercise Log</h5></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link"><h5>Create User</h5></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/recommendation" className="nav-link"><h5>Recommended Exercises</h5></Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            

            // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            //     <Link to="/" className="navbar-brand">ExcerTracker</Link>
            //     <div className="collapse navbar-collapse">
            //     <ul className="navbar-nav mr-auto">
            //         <li className="navbar-item">
            //             <Link to="/" className="nav-link">Exercises</Link>
            //         </li>
            //         <li className="navbar-item">
            //             <Link to="/create" className="nav-link">Create Exercise Log</Link>
            //         </li>
            //         <li className="navbar-item">
            //             <Link to="/user" className="nav-link">Create User</Link>
            //         </li>
            //         <li className="navbar-item">
            //             <Link to="/recommendation" className="nav-link">Recommended Exercises</Link>
            //         </li>
            //     </ul>
            //     </div>
            // </nav>
        );
    }
}
//                <Link to="/" className="navbar-brand"><link rel="icon" type="image/x-icon" href="../excer-logo.ico"/>ExcerTracker</Link>
//<Link to="/" className="navbar-brand"><img src={require('../excer-logo.ico')} />ExcerTracker</Link>

/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li> */











