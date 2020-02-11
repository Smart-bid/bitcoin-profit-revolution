import React, { Component } from 'react'
import Button from './Button/Button'
import HowItWorks from "./HowItWorks/HowItWorks";
import ReasonsNewspaper from "./ReasonsNewspaper/ReasonsNewspaper";
import JoinNow from "./JoinNow/JoinNow";
import WhyJoin from "./WhyJoin/WhyJoin";
import Steps from "./Steps/Steps";
import FooterForm from "./FooterForm/FooterForm";



export default class MidSection extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="MidSection">
                <div className="section-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="card-grey">
                                    <h2>{languageManager.join_title_left}</h2>
                                    <p className={"lead"}>{languageManager.join_subtitle_left}</p>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.7" id="icon_expert-help.min">
                                                    <path d="M83.1 68.1c-2.9-1.4-5.9-2.2-9-2.6l.3-2.2c.7-.4 1.2-1.1 1.2-1.6l.2-2.1c.1.1.2.2.4.2.3 0 .6-.2.7-.5l.3-3.2c0-.3-.2-.6-.5-.7-.1 0-.2 0-.3.1.1-.6.1-1.2.2-1.8.1-.8.5-3-1.1-4.5-2.3-2.3-7.4-2.3-9.7 0-1.6 1.4-1.2 3.6-1.1 4.5.1.6.1 1.2.2 1.8-.1-.1-.2-.1-.3-.1-.3 0-.6.3-.5.7l.3 3.2c0 .3.3.6.7.5a.76.76 0 0 0 .4-.2l.2 2.1c0 .5.5 1.2 1.2 1.6l.3 2.2c-3.1.4-6.2 1.2-9 2.6-.9.5-1.6 1.7-1.5 2.7l.3 3.3a2.45 2.45 0 0 0 1.9 2.1c7.8 1.3 15.8 1.3 23.6 0 .9-.2 1.8-1.1 1.9-2.1l.3-3.3c0-1-.6-2.2-1.6-2.7z" fill="#01bacc"></path>
                                                    <path d="M61.4 76.6l2.3.2h.3l4.9.3h3.6c0-.7-.1-1.5-.2-2.3-.4-3.5-1.2-6.5-2-7.7v-2.7h.1c1 0 1.9-3.8 1.9-8.5s-.8-8.5-1.9-8.5h-.7c-.2 0-.4.1-.6.1s-.4.1-.6.1h-.1c-.2 0-.3.1-.5.2-.1 0-.1 0-.1.1-.1.1-.3.1-.4.2-.1 0-.1.1-.2.1-.1.1-.2.1-.3.2s-.2.1-.3.2-.2.1-.2.1a.78.78 0 0 0-.4.4c-1.6 1.4-1.2 3.6-1.1 4.5.1.6.1 1.2.2 1.8-.1-.1-.2-.1-.3-.1-.3 0-.6.3-.5.7l.3 3.2c0 .3.3.6.7.5a.76.76 0 0 0 .4-.2l.2 2.1c0 .5.5 1.2 1.2 1.6l.3 2.2c-3.1.4-6.2 1.2-9 2.6-.9.5-1.6 1.7-1.5 2.7l.3 3.3a2.45 2.45 0 0 0 1.9 2.1l2.3.3c-.2.2-.1.2 0 .2z" fill="#01c6da"></path>
                                                    <path d="M26.5 68.1c-2.9-1.4-5.9-2.2-9-2.6l.3-2.2c.7-.4 1.2-1.1 1.2-1.6l.2-2.1c.1.1.2.2.4.2.3 0 .6-.2.7-.5l.3-3.2c0-.3-.2-.6-.5-.7-.1 0-.2 0-.3.1.1-.6.1-1.2.2-1.8.1-.8.5-3-1.1-4.5-2.3-2.3-7.4-2.3-9.7 0C7.6 50.6 8 52.8 8 53.7c.1.6.1 1.2.2 1.8-.1-.1-.2-.1-.3-.1-.3 0-.6.3-.5.7l.3 3.2c0 .3.3.6.7.5a.76.76 0 0 0 .4-.2l.2 2.1c0 .5.5 1.2 1.2 1.6l.3 2.2c-3.1.4-6.2 1.2-9 2.6-.9.5-1.6 1.7-1.5 2.7l.3 3.3a2.45 2.45 0 0 0 1.9 2.1c7.8 1.3 15.8 1.3 23.6 0 .9-.2 1.8-1.1 1.9-2.1l.3-3.3c.1-1-.6-2.2-1.5-2.7z" fill="#ff876c"></path>
                                                    <path d="M4.8 76.6c.7.1 1.5.2 2.2.2h.3l4.9.3h3.6c0-.7-.1-1.5-.2-2.3-.4-3.5-1.2-6.5-2-7.7v-2.7h.1c1 0 1.9-3.8 1.9-8.5s-.8-8.5-1.9-8.5H13c-.2 0-.4.1-.6.1s-.4.1-.6.1h-.1c-.2 0-.3.1-.5.2-.1 0-.1 0-.2.1s-.3.1-.4.2c-.1 0-.1.1-.2.1-.1.1-.2.1-.3.2s-.2.1-.3.2-.2.1-.2.1a.78.78 0 0 0-.4.4C7.6 50.6 8 52.8 8 53.7c.1.6.1 1.2.2 1.8-.1-.1-.2-.1-.3-.1-.3 0-.6.3-.5.7l.3 3.2c0 .3.3.6.7.5a.76.76 0 0 0 .4-.2l.2 2.1c0 .5.5 1.2 1.2 1.6l.3 2.2c-3.1.4-6.2 1.2-9 2.6-.9.5-1.6 1.7-1.5 2.7l.3 3.3a2.45 2.45 0 0 0 1.9 2.1l2.3.3c.1.1.2.1.3.1z" fill="#ffa38f"></path>
                                                    <path d="M62.4 70.9c-4.7-2.2-9.6-3.6-14.7-4.2.2-1.2.3-2.4.5-3.6 1.1-.7 1.9-1.8 2-2.7.1-1.1.3-2.2.4-3.4.2.2.4.3.6.3.5.1 1-.3 1.1-.9l.5-5.2c.1-.5-.3-1-.9-1.1-.2 0-.4 0-.6.1l.3-2.9c.1-1.3.8-4.9-1.8-7.3-3.8-3.7-12-3.7-15.8 0-2.6 2.3-1.9 5.9-1.8 7.3l.3 2.9c-.2-.1-.4-.1-.6-.1-.5.1-.9.5-.9 1.1l.5 5.2c.1.5.5.9 1.1.9.2 0 .5-.1.6-.3.1 1.1.3 2.2.4 3.4.1.9.9 2 2 2.7.2 1.2.3 2.4.5 3.6-5.1.6-10.1 2-14.7 4.2-1.5.8-2.6 2.8-2.4 4.4.2 1.8.4 3.6.5 5.4.2 1.6 1.5 3.1 3 3.4 12.8 2.1 25.7 2.1 38.5 0 1.5-.3 2.9-1.9 3-3.4.2-1.8.4-3.6.5-5.4.5-1.6-.6-3.6-2.1-4.4z" fill="#30363d"></path>
                                                    <path d="M27.1 84.8c1.2.2 2.4.3 3.7.4h.4l7.9.5H45l-.3-3.7c-.6-5.7-1.9-10.6-3.2-12.5V65h.2c1.7 0 3-6.2 3-13.8s-1.4-13.8-3-13.8h-.2c-.4 0-.7 0-1.1.1-.3 0-.7.1-1 .1h-.1c-.3.1-.6.1-.9.2h-.1c-.3.2-.5.2-.8.3-.1 0-.2.1-.2.1-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.2.1-.4.2-.5.3-.2.1-.3.2-.4.3s-.2.2-.4.2c-.3.2-.5.4-.7.6-2.6 2.3-1.9 5.9-1.8 7.3l.3 2.9c-.2-.1-.4-.1-.6-.1-.5.1-.9.5-.9 1.1l.5 5.2c.1.5.5.9 1.1.9.2 0 .5-.1.6-.3.1 1.1.3 2.2.4 3.4.1.9.9 2 2 2.7.2 1.2.3 2.4.5 3.6-5.1.6-10.1 2-14.7 4.2-1.5.8-2.6 2.8-2.4 4.4.2 1.8.4 3.6.5 5.4.2 1.6 1.5 3.1 3 3.4 1.2.2 2.5.4 3.7.5.2 0 .4.1.6.1z" fill="#484f59"></path>
                                                    <path d="M65.3 0C54.1 0 45.1 9 45.1 20.2c0 5 1.8 9.5 4.8 13.1l-4.7 8.9 8.6-5.4C57 39 61 40.4 65.3 40.4c11.1 0 20.2-9 20.2-20.2C85.4 9 76.4 0 65.3 0z" fill="#f4da80"></path>
                                                    <path d="M65.3 0h-.2v40.4h.2c11.1 0 20.2-9 20.2-20.2C85.4 9 76.4 0 65.3 0z" fill="#f0ca67"></path>
                                                    <path d="M63.4 34.1v-3.2c-2.3-.1-4.5-.8-5.8-1.5l1-4c1.4.8 3.4 1.5 5.7 1.5 2 0 3.3-.8 3.3-2.1s-1.1-2.1-3.7-3c-3.7-1.2-6.1-2.9-6.1-6.3 0-3 2.1-5.4 5.8-6.1V6.2H67v3c2.3.1 3.8.6 5 1.1l-1 3.9c-.9-.4-2.5-1.2-5-1.2-2.2 0-2.9 1-2.9 1.9 0 1.1 1.2 1.8 4.1 2.9 4.1 1.4 5.7 3.3 5.7 6.4 0 3-2.1 5.6-6 6.3V34h-3.5z" fill="#fff"></path>
                                                    <path fill="#e5e8ec" d="M67.2 17.9c-.9-.3-1.6-.6-2.2-.9v5.2c1.8.7 2.6 1.5 2.6 2.6 0 1.2-1 1.9-2.6 2.1v7.2h1.8v-3.5c3.9-.6 6-3.2 6-6.3.1-3.1-1.5-5-5.6-6.4zM65.1 6.2v6.9c.3 0 .6-.1 1-.1 2.5 0 4.1.8 4.9 1.2l1-3.9c-1.2-.5-2.7-1.1-5-1.1v-3h-1.9z"></path>
                                                </svg>
                                            </div>
                                            <div className="feature">
                                                <h3>{languageManager.join_description_left[0].title}</h3>
                                                <p><span>{languageManager.join_description_left[0].link}</span> {languageManager.join_description_left[0].text}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.1 84.7" id="icon_cutting-edge-technology.min">
                                                    <path fill="#b7bec0" d="M45.6 46.9c0-.2 0-.5-.1-.7.1.2.1.5.1.7zm.1.9v-.4.4zm-.1-2.9c0-.5 0-1.1.1-1.6-.1.5-.1 1.1-.1 1.6zm.3 3.8c0-.1 0-.1 0 0 0-.1 0-.1 0 0zm-.3-2.8V45v.9zm0-2.9c0-.4.1-.8.1-1.3 0 .5 0 .9-.1 1.3zm17.8-13c1.5-.5 3.2-.8 4.9-.8v-7c-2.5 0-4.6.3-7 1.1l-1.5.6 1.5-.6 2.1 6.7zm4.9-7.8zm-10 2.3c.3-.2.6-.3 1-.4-.3.1-.6.3-1 .4z"></path>
                                                    <path fill="#f0ca67" d="M65 67.5c-.4-.1-.9-.1-1.3-.2.5 0 .9.1 1.3.2zM48.3 55.8c-.1-.2-.2-.5-.4-.7.2.2.3.5.4.7zM91 47.2v.2c-.1-.1 0-.2 0-.2zM66.7 67.7h-.4c.1-.1.2-.1.4 0zM48.3 55.8c3.2 6 8.8 10.1 15.4 11.4-6.6-1.3-12.2-5.6-15.4-11.4zM81 35.7c1.9 2.6 3 5.8 3 9.2h7c0-5.5-2-10.5-5.2-14.5.3.4.6.7.8 1.1L81 35.7zM69.5 22.3h-1.2c.4-.1.8-.1 1.2 0z"></path>
                                                    <path fill="#484f59" d="M81.7 63.4l1.1-.8a4.44 4.44 0 0 0-1.1.8zM91.1 45v1.2c-.1-.4 0-.8 0-1.2zM77.6 57.7c-2.6 1.9-5.8 3-9.2 3-8.7 0-15.7-7-15.7-15.7 0-7 4.6-12.9 10.9-15l-2.2-6.7-1.5.6c-.2.1-.3.1-.4.2-.3.1-.6.3-1 .4-6.9 3.3-11.5 9.7-12.6 17.3-.1.4-.1.8-.1 1.3v.2c0 .5-.1 1.1-.1 1.6v1.4c0 .2 0 .5.1.7v.9c0 .3.1.5.1.8a22.91 22.91 0 0 0 2.1 6.4c.1.2.2.5.4.7 3.2 5.8 8.7 10.1 15.4 11.4.4.1.9.2 1.3.2.4.1.8.1 1.2.1h.4c.5 0 1.1.1 1.6.1 5 0 9.6-1.6 13.4-4.3l-4.1-5.6z"></path>
                                                    <path fill="#ff876c" d="M68.3 29.2c5.2 0 9.9 2.6 12.7 6.5l5.7-4.1c-.3-.4-.6-.7-.8-1.1-4.1-5.1-9.8-7.9-16.3-8.2h-1.2l-.1 6.9z"></path>
                                                    <path d="M82.7 62.6c4.8-3.9 7.6-9.2 8.2-15.2v-.2c0-.3.1-.6.1-.9V45h-7c0 5.2-2.6 9.9-6.5 12.7l4.1 5.7c.4-.3.8-.6 1.1-.8z" fill="#01bacc"></path>
                                                    <path fill="#01c6da" d="M0 57.5h3.5v27.3H0z"></path>
                                                    <path fill="#b7bec0" d="M4.6 63.3h3.5v21.4H4.6z"></path>
                                                    <path fill="#ff876c" d="M9.1 44.3h3.5v40.4H9.1z"></path>
                                                    <path fill="#01c6da" d="M13.7 66.8h3.5v18h-3.5z"></path>
                                                    <path fill="#b7bec0" d="M18.2 76.7h3.5v8h-3.5z"></path>
                                                    <path fill="#ff876c" d="M22.8 58.1h3.5v26.7h-3.5z"></path>
                                                    <path fill="#282d33" d="M32.9 84.7h22.3c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H32.9c-.8 0-1.4.6-1.4 1.4-.1.8.6 1.4 1.4 1.4z"></path>
                                                    <path d="M16.3 27.7C16.3 12.4 28.7 0 44 0s27.7 12.4 27.7 27.7c0 .9-.7 13.7-11.1 27.2-3.1 4.1-2.6 12.2-2.5 12.2H29.9s.6-8.2-2.5-12.2C16.9 41.4 16.3 28.6 16.3 27.7z" fill="#f3b840"></path>
                                                    <path fill="#f0ca67" d="M35.1 63.5c-.2-3.5-1-10.1-3.2-12.9-9.9-12.8-10.4-24.9-10.4-25 0-13.3 10.8-24.1 24.1-24.1s24.1 10.8 24.1 24.1c0 .1-.5 12.2-10.3 24.9-2.2 2.9-3.1 9.5-3.3 13h-21z"></path>
                                                    <path d="M66 27.4c-1.1 0-2-.9-2-2 0-9.8-8-17.8-17.8-17.8-1.1 0-2-.9-2-2s.9-2 2-2c12 0 21.7 9.7 21.7 21.7.1 1.2-.8 2.1-1.9 2.1z" fill="#f4da80"></path>
                                                    <g fill="#282d33">
                                                        <path d="M58.1 67.2v14.5c0 1-.8 1.8-1.8 1.8H31.7c-1 0-1.8-.8-1.8-1.8V67.2h28.2z"></path>
                                                        <path d="M58.7 70.1H29.3c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h29.4c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.4-1.4 1.4z"></path>
                                                    </g>
                                                    <path fill="#484f59" d="M45.7 69.3H29.4c-.4 0-.8-.4-.8-.8s.4-.8.8-.8h16.3c.4 0 .8.3.8.8s-.4.8-.8.8z"></path>
                                                    <path fill="#282d33" d="M58.7 74.8H29.3c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h29.4c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm0 4.7H29.3c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h29.4c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4z"></path>
                                                    <path fill="#484f59" d="M45.7 73.9H29.4c-.4 0-.8-.4-.8-.8s.4-.8.8-.8h16.3c.4 0 .8.3.8.8 0 .4-.4.8-.8.8zm0 4.7H29.4c-.4 0-.8-.4-.8-.8s.4-.8.8-.8h16.3c.4 0 .8.4.8.8 0 .5-.4.8-.8.8z"></path>
                                                    <path fill="#30363d" d="M33.8 70.1h13.9v1.4H33.8zm0 4.6h13.9v1.4H33.8zm0 4.6h13.9v1.4H33.8z"></path>
                                                    <path fill="#484f59" d="M27.6 28.6c0 9.3 7.6 16.9 16.9 16.9s16.9-7.6 16.9-16.9-7.6-16.9-16.9-16.9c-9.3.1-16.9 7.6-16.9 16.9zm25.8 0c0 4.9-4 8.9-8.9 8.9s-8.9-4-8.9-8.9 4-8.9 8.9-8.9c4.9.1 8.9 4 8.9 8.9z"></path>
                                                    <path fill="#30363d" d="M33.3 28.6c0 6.2 5 11.2 11.2 11.2s11.2-5 11.2-11.2-5-11.2-11.2-11.2c-6.2.1-11.2 5.1-11.2 11.2zm20.1 0c0 4.9-4 8.9-8.9 8.9s-8.9-4-8.9-8.9 4-8.9 8.9-8.9c4.9.1 8.9 4 8.9 8.9z"></path>
                                                    <g fill="#484f59">
                                                        <path d="M30.6 24.7v7.8l-5.9-1.2V26z"></path>
                                                        <path d="M30.5 31.9l3.9 6.8-5.7 1.9-2.6-4.6z"></path>
                                                        <path d="M34.1 38.2l6.8 3.9-4.1 4.5-4.6-2.7z"></path>
                                                        <path d="M40.3 41.8h7.8l-1.3 5.9h-5.2z"></path>
                                                        <path d="M47.5 41.9l6.8-3.9 1.8 5.7-4.6 2.7z"></path>
                                                        <path d="M53.8 38.3l3.9-6.7 4.4 4-2.6 4.6z"></path>
                                                        <path d="M57.4 32.1v-7.8l5.9 1.3v5.3z"></path>
                                                        <path d="M57.5 24.9l-4-6.7 5.8-1.9 2.6 4.6z"></path>
                                                        <path d="M53.9 18.7l-6.8-3.9 4.1-4.5 4.6 2.6z"></path>
                                                        <path d="M47.7 15h-7.8l1.2-5.9h5.3z"></path>
                                                        <path d="M40.5 15l-6.8 3.9-1.8-5.8 4.5-2.6z"></path>
                                                        <path d="M34.2 18.5l-3.9 6.8-4.5-4.1 2.7-4.5z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="feature">
                                                <h3>{languageManager.join_description_left[1].title}</h3>
                                                <p>{languageManager.join_description_left[1].text}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.5 84.4" id="icon_instant-profits.min">
                                                    <path d="M37.6 23.7V8h2V0H21.9v8h2v15.7C10.2 26.8 0 39 0 53.7c0 17 13.8 30.7 30.7 30.7 17 0 30.7-13.8 30.7-30.7.1-14.7-10.1-26.9-23.8-30z" fill="#e5e8ec"></path>
                                                    <path fill="#f7f8fc" d="M28.2 8.5h8.1v14h-8.1zm30 42.2c0 14.1-11.4 25.5-25.5 25.5S7.2 64.8 7.2 50.7s11.4-25.5 25.5-25.5 25.5 11.4 25.5 25.5z"></path>
                                                    <path fill="#f4da80" d="M22.3 42.9a2.69 2.69 0 0 1-2.7 2.7 2.69 2.69 0 1 1 0-5.4 2.69 2.69 0 0 1 2.7 2.7zm19.6 10.6a4.23 4.23 0 0 1-4.2 4.2 4.23 4.23 0 0 1-4.2-4.2 4.23 4.23 0 0 1 4.2-4.2 4.23 4.23 0 0 1 4.2 4.2zM23.6 33.8c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3.6-1.3 1.3-1.3c.7-.1 1.3.5 1.3 1.3zm7.7 25c0 5.7-4.7 10.4-10.4 10.4s-10.4-4.7-10.4-10.4 4.7-10.4 10.4-10.4S31.3 53 31.3 58.8z"></path>
                                                    <path fill="#f0ca67" d="M30.9 58.8a10.07 10.07 0 0 1-10.1 10.1 10.07 10.07 0 1 1 0-20.2 10.07 10.07 0 0 1 10.1 10.1z"></path>
                                                    <path fill="#f4da80" d="M28.8 58.8c0 4.4-3.6 7.9-7.9 7.9-4.4 0-7.9-3.6-7.9-7.9 0-4.4 3.6-7.9 7.9-7.9 4.4-.1 7.9 3.5 7.9 7.9z"></path>
                                                    <path fill="#f0ca67" d="M20.3 63.4c-.5 0-1-.2-1.4-.4a4.44 4.44 0 0 1-1.1-.8l.3-.5.1-.1h.2c.1 0 .2 0 .3.1a1.38 1.38 0 0 0 .4.3c.2.1.3.2.5.3s.5.2.8.2l.2-3.5-.9-.3c-.3-.1-.6-.3-.8-.4-.2-.2-.4-.4-.6-.7-.1-.3-.2-.6-.2-1.1 0-.3.1-.6.2-.9s.3-.6.5-.8.5-.4.9-.6c.3-.2.8-.2 1.2-.2l.1-1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h.4l-.1 1.3c.5.1.9.2 1.2.4l.9.6-.3.4c-.1.1-.2.2-.3.2s-.1 0-.2-.1-.2-.1-.3-.2-.3-.1-.4-.2c-.2-.1-.4-.1-.6-.2l-.2 3.2.9.3c.3.1.6.3.8.4.2.2.4.4.6.7s.2.6.2 1-.1.8-.2 1.1-.3.6-.6.9-.6.5-.9.6c-.4.2-.8.2-1.2.2v1.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.4v-1.5zm-1-7c0 .2 0 .4.1.5a1.38 1.38 0 0 0 .3.4c.1.1.3.2.5.3s.4.2.6.2l.2-3c-.3 0-.5.1-.7.2s-.4.2-.5.3-.2.3-.3.4c-.2.3-.2.5-.2.7zm3.6 4.3c0-.2 0-.4-.1-.6s-.2-.3-.3-.4-.3-.2-.5-.3-.4-.2-.6-.2l-.2 3.3c.3 0 .5-.1.8-.2.2-.1.4-.2.6-.4s.3-.3.3-.5c-.1-.2 0-.4 0-.7z"></path>
                                                    <path fill="#f4da80" d="M42.2 37.4c0 4.7-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5 3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5z"></path>
                                                    <path fill="#f0ca67" d="M41.9 37.4c0 4.6-3.7 8.3-8.3 8.3-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3z"></path>
                                                    <path fill="#f4da80" d="M40.2 37.4a6.49 6.49 0 1 1-13 0 6.49 6.49 0 0 1 6.5-6.5c3.5 0 6.5 2.9 6.5 6.5z"></path>
                                                    <path fill="#f0ca67" d="M33.2 41.2c-.4 0-.8-.1-1.2-.3s-.7-.4-.9-.7l.3-.4.1-.1h.1c.1 0 .1 0 .2.1s.2.1.3.2.3.2.4.3c.2.1.4.1.6.2l.2-2.8c-.2-.1-.5-.2-.7-.3s-.5-.2-.7-.4-.3-.3-.5-.6c-.1-.2-.2-.5-.2-.9 0-.3.1-.5.2-.8.1-.2.3-.5.4-.7.2-.2.4-.4.7-.5s.6-.2 1-.2l.1-.8c0-.1 0-.1.1-.2 0-.1.1-.1.2-.1h.4l-.1 1.1a1.69 1.69 0 0 1 1 .3c.3.1.5.3.7.5l-.2.4-.2.2s-.1 0-.2-.1c-.1 0-.2-.1-.3-.2s-.2-.1-.4-.2c-.1-.1-.3-.1-.5-.1l-.2 2.6.8.3c.2.1.5.2.7.4.2.1.4.3.5.6.1.2.2.5.2.8s-.1.6-.2.9-.3.5-.5.7-.5.4-.8.5-.6.2-1 .2l-.1 1c0 .1 0 .1-.1.2 0 0-.1.1-.2.1h-.4l.4-1.2zm-.9-5.8c0 .2 0 .3.1.4s.1.2.3.3a1.38 1.38 0 0 0 .4.3c.1.1.3.1.5.2l.2-2.4c-.2 0-.4.1-.6.1-.2.1-.3.2-.4.3s-.2.2-.2.4c-.2.1-.3.3-.3.4zm3 3.6c0-.2 0-.3-.1-.5l-.3-.3c-.1-.1-.2-.2-.4-.2-.2-.1-.3-.1-.5-.2l-.2 2.7c.2 0 .4-.1.6-.2s.3-.2.5-.3c.1-.1.2-.3.3-.4s.1-.4.1-.6z"></path>
                                                    <path fill="#f4da80" d="M56.9 60.6c-3 11.6-13.5 20.2-26.1 20.2S7.7 72.2 4.7 60.6h52.2z"></path>
                                                    <path fill="#f0ca67" d="M12.7 60.6c4 10 12.9 17.5 23.8 19.6-1.8.4-3.8.6-5.7.6-12.6 0-23.1-8.6-26.1-20.2h8z"></path>
                                                    <path fill="#f7f8fc" d="M28.2 1.3h9.1v5.6h-9.1z"></path>
                                                </svg>
                                            </div>
                                            <div className="feature">
                                                <h3>{languageManager.join_description_left[2].title}</h3>
                                                <p>{languageManager.join_description_left[2].text}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="app-security">
                                    <h2 className={"headline"}>
                                        <span className="hundred">{languageManager.join_title_right[0]} <sub>{languageManager.join_title_right[2]}</sub></span>
                                        <span className="subheadline">{languageManager.join_title_right[1]}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="154.2" height="164.4" viewBox="0 0 154.2 164.4"><path d="M142 101.8c-7.1 15.4-16.5 28.9-28.3 40.5-9.9 9.6-20.1 16.6-30.8 20.9-3.9 1.7-7.7 1.7-11.6 0-12.2-4.9-23.4-12.8-33.7-23.8A128.18 128.18 0 0 1 10.9 98C3.6 80.2 0 61.2 0 41.1c0-3.2.9-6.1 2.6-8.7 1.7-2.5 4-4.4 7-5.4L71.3 1.3c3.9-1.7 7.7-1.7 11.6 0L144.5 27c3 1.1 5.4 2.9 7.1 5.5 1.7 2.6 2.6 5.5 2.6 8.7 0 22-4.1 42.2-12.2 60.6zm-25.7 4.8c11.1-18.2 16.9-38.9 17.3-62L77.1 20.9v122.4c16-8 29.1-20.2 39.2-36.7z" fill="#fff" opacity=".3"></path></svg>
                                    </h2>
                                    <h3>{languageManager.join_subtitle_right}</h3>
                                    <p className={"lead"}>{languageManager.join_subtitle_right2}</p>
                                    <p>{languageManager.join_description_right[0]}</p>
                                    <p>{languageManager.join_description_right[1]}</p>
                                    <svg id="introBgBlock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 728.3 728.3">
                                        <path className="bgblob" fill="#47BEF2"
                                              d="M684 102.7c-15.8 142.9.1 325.4 40.5 463.4C743 629.2 691 691.2 625.6 684c-142.9-15.8-325.4.1-463.4 40.5C99.1 743 37.1 691 44.3 625.6c15.8-142.9-.1-325.4-40.5-463.4-18.5-63.1 33.5-125.1 98.9-117.9 142.9 15.8 325.4-.1 463.4-40.5 63.1-18.5 125.1 33.5 117.9 98.9z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button {...this.props} children={languageManager.brown_btn} />
                <HowItWorks {...this.props} />
                <WhyJoin {...this.props} />
                <ReasonsNewspaper {...this.props} />
                <div className="alone-title">
                    <h2 className={"text-center"}>{languageManager.your_turn}</h2>
                    <Button {...this.props} children={languageManager.brown_btn} />
                </div>
                <JoinNow {...this.props} />
                <Steps {...this.props} />
                <Button {...this.props} children={languageManager.brown_btn} />
                <FooterForm {...this.props} />
            </div>

        )
    }
}
