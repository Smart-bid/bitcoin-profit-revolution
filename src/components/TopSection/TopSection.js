import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'
import logo from './logo.svg'
import bbb from './images/bbb.png'
import euronext from './images/euronext.png'
import mcafee from './images/McAfee.png'
import nasdaq from './images/Nasdaq.png'
import norton from './images/norton.png'
import tmx from './images/tmx.png'
import trust from './images/Trust.png'

export default class TopSection extends Component {
    constructor(props) {
        super(props)
        this.regPanel = React.createRef();
    }

    handleScroll() {
        let panel = this.regPanel.current;
        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })

    }

    render() {
        let languageManager = this.props.languageManager(),
            steps = [
            {
                className: 'cardb',
                inputs: [
                    {
                        name: 'first_name',
                        type: 'text',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass left'
                    },
                    {
                        name: 'last_name',
                        type: 'text',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass right'
                    },
                    {
                        name: 'email',
                        type: 'email',
                        className: 'input_big',
                        errorClass: 'inputError',
                        groupClass: 'formClass large'
                    },
                    {
                        name: 'phone_number',
                        type: 'phone_number',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass small left'
                    },
                    {
                        name: 'password',
                        type: 'password',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass small right',
                        listClass: 'req_list'
                    },
                    {
                        name: 'agree_1',
                        type: 'checkbox',
                        text: languageManager.agreement_first,
                        links: [{text: 'Privacy Policy', to: '/'}],
                        groupClass: 'checkbox_text'
                    },
                    {
                        name: 'agree_2',
                        type: 'checkbox',
                        text: languageManager.agreement_second,
                        links: [{text: languageManager.terms_links, to: '/terms'}, {text: languageManager.privacy_links, to: '/privacy'}],
                        groupClass: 'checkbox_text'
                    }
                ],
                button: {
                    className: 'button_forward',
                    text: languageManager.button
                },
                supportText: {
                    className: 'support_text',
                    image: {},
                    main: languageManager.more_title[0],
                    tooltip: languageManager.more_decription
                }
            }
        ];
        return (
            <div className='TopSection'>
                <Header languageManager={this.props.languageManager} handleScroll={this.handleScroll.bind(this)}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 grey-block">
                            <p>{languageManager.header_title}</p>
                        </div>
                        <div className="col-lg-3 col-md-6 logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.1 47.5">
                                <title>Profit Revolution</title>
                                <path fill="#ffffff" d="M64.9 40.7h-1.5l-2.2-5.1h-3.3v5.1h-1.4V29.1h4.6c1.2 0 2.2.3 2.8 1 .6.7.9 1.4.9 2.2 0 .6-.2 1.2-.5 1.8-.3.6-.9 1-1.7 1.2l2.3 5.4zm-7-6.2H61c.8 0 1.4-.2 1.8-.6.4-.4.6-.9.6-1.6 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5H58v4.1zM73.8 38.1l1.2.3c-.2.7-.7 1.3-1.3 1.8a4.07 4.07 0 0 1-5.3-.4c-.7-.8-1.1-1.9-1.1-3.3s.4-2.5 1.1-3.3c.8-.8 1.7-1.3 2.9-1.3 1.1 0 2 .4 2.7 1.2.7.8 1 1.9 1.1 3.5h-6.3c0 1.3.3 2.2.8 2.6.5.5 1.1.7 1.7.7 1.2 0 2-.6 2.5-1.8zm-.1-2.6c0-.5-.1-.9-.2-1.3s-.4-.7-.8-1c-.4-.3-.8-.4-1.3-.4-.7 0-1.2.2-1.7.7s-.7 1.1-.8 1.9h4.8zM84.4 32.1l-3 8.6H80l-3-8.6h1.5l2.4 7 2.4-7h1.1zM90 41c-1.2 0-2.1-.4-2.8-1.3-.7-.9-1-2-1-3.3 0-1.4.4-2.5 1.1-3.3.7-.8 1.7-1.2 2.8-1.2 1.2 0 2.1.4 2.8 1.3.7.9 1 1.9 1 3.2 0 1.3-.4 2.4-1.1 3.3S91.2 41 90 41zm.1-1.1c.7 0 1.3-.3 1.7-.8.5-.6.7-1.4.7-2.6 0-1.2-.2-2.1-.7-2.6-.5-.5-1.1-.8-1.7-.8-.7 0-1.2.3-1.7.8s-.7 1.4-.7 2.6c0 1.2.2 2.1.7 2.7.5.4 1 .7 1.7.7zM98.4 40.7h-1.3V29.1h1.3v11.6zM108.8 40.7h-1.2v-1.6c-.6 1.3-1.5 1.9-2.7 1.9-.9 0-1.6-.3-2.1-.9s-.8-1.4-.8-2.5v-5.5h1.3v5.5c0 .9.2 1.4.5 1.8.4.3.7.5 1.2.5.4 0 .8-.1 1.2-.4.4-.2.6-.6.9-1 .2-.5.4-.9.4-1.5v-4.9h1.3v8.6zM116.6 39.8v1.1c-.5.1-.9.1-1.2.1-1.7 0-2.5-.9-2.5-2.6v-5.2h-1.5v-1.1h1.5l.1-2.2 1.2-.1v2.3h1.9v1.1h-1.9v5.4c0 .9.5 1.3 1.4 1.3.3 0 .6 0 1-.1zM120.6 29.1v1.5h-1.4v-1.5h1.4zm-.1 3v8.6h-1.3v-8.6h1.3zM127.4 41c-1.2 0-2.1-.4-2.8-1.3-.7-.9-1-2-1-3.3 0-1.4.4-2.5 1.1-3.3.7-.8 1.7-1.2 2.8-1.2 1.2 0 2.1.4 2.8 1.3.7.9 1 1.9 1 3.2 0 1.3-.4 2.4-1.1 3.3s-1.7 1.3-2.8 1.3zm.1-1.1c.7 0 1.3-.3 1.7-.8.5-.6.7-1.4.7-2.6 0-1.2-.2-2.1-.7-2.6-.5-.5-1.1-.8-1.7-.8-.7 0-1.2.3-1.7.8s-.7 1.4-.7 2.6c0 1.2.2 2.1.7 2.7.4.4 1 .7 1.7.7zM141.2 40.7H140v-5.5c0-.8-.2-1.4-.5-1.7s-.8-.5-1.3-.5c-.7 0-1.3.3-1.7.8s-.7 1.3-.7 2.2v4.7h-1.3v-8.6h1.2v1.6c.7-1.2 1.6-1.8 2.7-1.8.6 0 1.2.2 1.6.5.5.3.8.7.9 1.1.2.4.3 1.2.3 2.3v4.9z"></path><g><path fill="#ffffff" d="M62.3 18.6v6.5h-5.5V7.3h7.6c1.9 0 3.3.2 4.3.7 1 .4 1.8 1.1 2.3 2 .6.9.9 1.9.9 3 0 1.7-.6 3.1-1.8 4.1s-2.8 1.6-4.7 1.6h-3.1zm-.1-3.8H64c1.6 0 2.4-.6 2.4-1.8 0-1.1-.7-1.7-2.2-1.7h-2v3.5zM89.4 25.1h-6.1l-2.6-6.8H79v6.8h-5.5V7.3h9.3c2.1 0 3.6.5 4.8 1.4 1.1 1 1.7 2.2 1.7 3.8 0 1-.2 1.9-.6 2.7-.4.8-1.3 1.5-2.5 2.1l3.2 7.8zM79 14.4h2.3c.7 0 1.2-.1 1.7-.4.4-.3.6-.7.6-1.3 0-1.1-.7-1.7-2.1-1.7H79v3.4zM99.3 25.3c-2.5 0-4.5-.8-6.1-2.5-1.6-1.7-2.4-3.9-2.4-6.7 0-2.7.8-4.9 2.3-6.6C94.6 7.8 96.7 7 99.3 7c2.5 0 4.5.8 6.1 2.5s2.3 3.8 2.3 6.6-.8 5.1-2.4 6.8-3.5 2.4-6 2.4zm0-4c.9 0 1.6-.4 2-1.2.4-.8.6-2.3.6-4.4 0-3.1-.8-4.6-2.5-4.6-1.8 0-2.7 1.8-2.7 5.3 0 3.2.8 4.9 2.6 4.9zM121.2 18.4h-5.8v6.7H110V7.3h12.9v4.2h-7.6v2.9h5.8v4zM130.1 7.3v17.8h-5.5V7.3h5.5zM140.4 11.5V25h-5.2V11.5h-3.7V7.3h12.6v4.3h-3.7z"></path></g><g><path fill="#ffffff" d="M1.3 16.2L12.7 4.8c1.4-1.4 2.9-2.6 4.4-3.5-3.3-.2-6.5-.6-9.4-1.2C3.2-.8-.8 3.2.1 7.7c.6 2.6.9 5.5 1.2 8.5zM12.6 17l5.4 5.4 3.7-3.7c1.1-1.1 1.7-2.2 2-3.3.2-1.1-.1-2.1-1-3-1.8-1.8-3.8-1.6-6.1.6l-4 4zM31.4 2.8c1.6 1.6 2.8 3.4 3.3 5.3.6 1.9.4 4.4-.7 7.4l12 4.9c.2-4.5.6-8.9 1.4-12.8.9-4.5-3.1-8.4-7.5-7.5-3.1.6-6.6 1.1-10.2 1.3.6.4 1.2.9 1.7 1.4zM46.6 34.5l-19.7-8.8-2.8 2.8 18.8 18.8c3-.9 5.2-4 4.5-7.4-.3-1.7-.6-3.5-.8-5.4zM1.6 23.4c0 5.7-.5 11.5-1.5 16.5-.9 4.5 3.1 8.4 7.5 7.5 5-1 10.7-1.5 16.5-1.5L1.6 23.4z"></path></g>
                            </svg>
                        </div>
                        <div className="col-lg-7">
                            <div className="headline">
                                <div className="title">
                                    <h1>{languageManager.title}</h1>
                                </div>
                                <div className="subtitle">
                                    <h2>{languageManager.subtitle}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 menu-block">
                            <button className="menu"></button>
                        </div>
                    </div>
                </div>
                <div className="top-reg" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 video-player">
                                <VideoPlayer {...this.props}/>
                            </div>
                            <div className="col-lg-4 col-md-12 form">
                                <div className="regform" ref={this.regPanel}>
                                    <Regform {...this.props}
                                             loadingLogo={{
                                                 className: 'loading',
                                                 source: logo
                                             }}
                                             material={true}
                                             formSteps={steps}
                                             responseError={{
                                                 className: 'resError',
                                                 button: {
                                                     className: 'button_forward',
                                                     text: 'OK'
                                                 }
                                             }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step-and-photo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 steps-block">
                                <div className="step">
                                    <p className="number">1</p>
                                    <div className="text">
                                        <p>{languageManager.instruction[0].text[0]}</p>
                                        <p>{languageManager.instruction[0].text[1]}</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <p className="number">2</p>
                                    <div className="text">
                                        <p>{languageManager.instruction[1].text[0]}</p>
                                        <p><span>{languageManager.instruction[1].text[1]}</span></p>
                                    </div>
                                </div>
                                <div className="step">
                                    <p className="number">3</p>
                                    <div className="text">
                                        <p>{languageManager.instruction[2].text[0]} <span>{languageManager.instruction[2].text[1]}</span></p>
                                        <p>{languageManager.instruction[2].text[2]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 img-block">
                                <img src={norton} alt="norton"/>
                                <img src={mcafee} alt="mcafee"/>
                                <img src={trust} alt="trust"/>
                                <img src={bbb} alt="bbb"/>
                                <img src={nasdaq} alt="nasdaq"/>
                                <img src={euronext} alt="euronext"/>
                                <img src={tmx} alt="tmx"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
