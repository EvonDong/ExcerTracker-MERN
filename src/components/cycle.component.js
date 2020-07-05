import React, { Component } from 'react';
import './recommended-exercise.css'

export default class Cycle extends Component {

    render() {
        return (
            <header className="recommended-masthead">
            <div className="cycle-container">
                <h3><b>Cycling</b></h3>
                <br></br>
                <img id="cycle" src={ require('../CyclingImage.jpeg') } />
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <h4><b>Benefits:</b></h4>
                    <p>
                    <li>Decrease body fat levels</li>
                    <li>Improve posture and coordination</li>
                    <li>Boost muscle strength and flexibility</li>
                    <li>Reduce anxiety and depression</li>
                    <li>Increase cardiovascular fitness</li>
                    </p>
                </div>

                <br></br>
                <h4><b>Tips:</b></h4>
                <div>
                    <p>Check out the routes with picturesque views <a href={"https://www.bikemap.net/en/l/1880251/"}>here</a> !</p>
                    <p>Check out the weather forecast <a href={"https://www.accuweather.com/en/browse-locations/asi/sg"}>here</a> !</p>
                </div>

                <br></br>
                <div>
                <h4><b>Recommended <br></br>Speed/Duration:</b></h4>
                    <p><b>Beginner: </b>Start with 10 to 15 minutes every day and add five to 10 minutes to your sessions in each subsequent week.</p>
                    <p><b>Intermediate: </b>Complete at least 30 minutes of biking every day. Try to cycle at the speed of 16-19km per hour. </p>
                </div>
            </div>
            </header>

        )
    }
}