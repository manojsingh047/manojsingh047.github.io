'use client'

import { useEffect, useState } from "react";
import './../styles/globals.css';
import { OPACITY_RANGE, COUNTER_ACTIONS, getOpacityValue, getValue, toggleCounterAction } from "../utils";
export default function Page() {
    const [opacity, setOpacity] = useState(1);
    // useEffect(() => {
    //     let floatNum = OPACITY_RANGE.MIN;
    //     let counterAction = COUNTER_ACTIONS.INCREMENT;

    //     setInterval(() => {
    //         floatNum = getValue(counterAction, floatNum);

    //         if (floatNum > OPACITY_RANGE.MAX || floatNum < OPACITY_RANGE.MIN) {
    //             counterAction = toggleCounterAction(counterAction);
    //         }
    //         const opacityValue = getOpacityValue(floatNum);
    //         setOpacity(opacityValue);
    //     }, 100);

    // }, []);

    // console.log('rendering...');
    return (<section id="app">
        <div id="bg" style={{ opacity }}></div>
        <div id="details">
            <div className="title">
                <p id="name">Manoj Singh</p>
                <p id="profile" className="light-font">Web Developer</p>
            </div>
            <div className="social light-font">
                <a href="https://medium.com/@manojsingh047" target="blank">Medium</a>
                <a href="https://www.linkedin.com/in/manojsingh047" target="blank">LinkedIn</a>
                <a href="https://github.com/manojsingh047" target="_blank">Github</a>
                <a href="https://stackoverflow.com/users/6372797/manoj-negi" target="_blank">Stack</a>
                <a href="mailto:manojsingh047@gmail.com" target="_blank">Mail</a>
                <a href="../resume.pdf" target="_blank">Resume</a>
            </div>
            <div className="copyright light-font">
                <p>
                    <b id="copyright-place">{`No copyright issues (© ${new Date().getFullYear()})`}</b>
                    <br />
                </p>
            </div>
        </div>
    </section>)
}