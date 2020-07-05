import React, { Component } from 'react';
import './recommended-exercise.css'

const emojiStyle = {
    fontSize: 30,
}
export default class Planks extends Component {
    render() {
        return (
            <header className="recommended-masthead">
            <div className="cycle-container">
                <h3><b>Planks</b></h3>
                <br></br>
                <img id="planksImg" src={ require('../planksImage.jpg') } />
                <br></br>
                <br></br>
                <h4><b>Description:</b></h4>
                <div>
                    <p>Arrange yourself as if you are doing a push-up.<br></br>
                    Rise to the top of this position, ensuring your back is completely straight, and hold this position.
                    </p>
                    <br></br>
                    <p style={emojiStyle}>&#10071;</p>
                    <p style={{color: "red"}}>
                        <li>Make sure your elbows are directly under your shoulders</li>
                        <li>Line your wrists up with your elbows</li>
                        <li>Push your body upwards, and keep your chin tight to your neck</li>
                    </p>
                </div>

                <br></br>
                <div>
                    <h4><b>Benefits:</b></h4>
                    <p>
                    <li>Improve your posture</li>
                    <li>Boost muscle definition in shoulders, chest, legs and back</li>
                    <li>Increase flexibility</li>
                    <li>Reduce risk of injury in back and spinal column and get rid of back pain</li>
                    <li>Boost metabolism</li>
                    </p>
                </div>
 
                <br></br>
                <div>
                <h4><b>Recommended Duration:</b></h4>
                    <p><b>Beginner: </b>Start with 30 seconds every day and add 30 seconds to your sessions in each subsequent week.</p>
                    <p><b>Intermediate: </b>Complete at least 2 minutes of planks every alternate days. </p>
                </div>
            </div>
            </header>

        )
    }
}