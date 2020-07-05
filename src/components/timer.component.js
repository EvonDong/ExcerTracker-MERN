import React, { Component, useEffect,  useRef, useState } from 'react';
import './timer.css';


const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 2, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = countdownDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            if (diff < 0) {   // stop timer
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <section className="timer-container" id="timer">
            <section className="timer">
                
                <div>
                    <h1>Goal: 56kg </h1>
                    <br></br>
                    <img src={require('../timer-icon.png')}/>
                    <h2>Countdown Timer</h2>
                    <p>Are you ready in </p>
                </div>
                <div className="innerDiv"> 
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>

    )
}

export default Timer;
