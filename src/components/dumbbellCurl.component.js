import React, { Component } from 'react';
import './recommended-exercise.css'

const emojiStyle = {
    fontSize: 30,
}
export default class DumbbellCurl extends Component {
    render() {
        return (
            <header className="recommended-masthead">
            <div className="cycle-container">
                <h3><b>Dumbbell Biceps Curl</b></h3>
                <br></br>
                <img id="dumbellCurlImg" src={ require('../dumbellCurl.gif') } />
                <br></br>
                <br></br>
                <h4><b>Description:</b></h4>
                <div>
                    <p>1. Hold a dumbbell in each hand and stand with your feet as wide apart as your hips<br></br>
                    2. Let your arms hang down at your sides with your palms forward<br></br>
                    3. Pull your abdominals in, stand tall, and keep your knees slightly bent<br></br>
                    4. Curl both arms upward until they’re in front of your shoulders<br></br>
                    </p>
                    <br></br>
                    <p style={emojiStyle}>&#10071;</p>
                    <p style={{color: "red"}}>
                        <li>Keep your knees slightly bent and your posture tall</li>
                        <li>Keep your elbows as close to your body as you can without supporting your elbows on the sides of your stomach for leverage</li>
                    </p>
                </div>

                <br></br>
                <div>
                    <h4><b>Benefits:</b></h4>
                    <p>
                    <li>Strengthen biceps muscles at the front of the upper and lower arm</li>
                    <li>Achieve sculpted, toned biceps</li>
                    <li>Improve Grip Strength</li>
                    </p>
                </div>
 
                <br></br>
                <div>
                <h4><b>Recommended Weight &#38; Duration:</b></h4>
                    <p><b>Beginner: </b>Start with 5 pound dumbbells for 15 minutes.</p>
                    <p><b>Intermediate: </b>Lift at least 10 pound dumbells every alternate days. </p>
                    <p><b>Advanced: </b>Increase weight gradually to at least 12 pound dumbells.</p>
                </div>
            </div>
            </header>

        )
    }
}