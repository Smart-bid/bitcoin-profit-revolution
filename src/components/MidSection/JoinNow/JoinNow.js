import React from 'react'
import happyCouple from './img/happyCouple.jpg'

const JoinNow = props => {
    let languageManager = props.languageManager();
    return (
        <div className={"JoinNow"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="section--join-now top-svg" viewBox="0 0 1366 158.4"
                 preserveAspectRatio="none">
                <path d="M1366 0c-1.2.3-2.4.7-3.7 1C959.1 119.1 440.7 173.8 0 148.5v9.9h1366V0z" fill="#f2f2f2"></path>
            </svg>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 join-img">
                        <img className={"join-img"} src={happyCouple} alt="Start Earning Instantly!"/>
                    </div>
                    <div className="col-lg-7 join-now">
                        <div className="card--blue">
                            <h2 className="headline--combo">
                                <span className="headline--combo-headline">{languageManager.join_now_title[0]}</span>
                                <span className="headline--combo-subheadline">{languageManager.join_now_title[1]}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.6 223">
                                    <path
                                        d="M129 69.7c4.1 0 7.1 1.7 9.1 5.2s2 7 0 10.5L61.5 217.8c-2 3.5-5.1 5.2-9.1 5.2a10.09 10.09 0 0 1-10-13l20-84.5H10.5c-3.2 0-5.8-1.2-7.8-3.5s-2.9-5.1-2.6-8.3L14 9.1c.3-2.6 1.5-4.8 3.5-6.5s4.4-2.6 7-2.6h59.2c3.5 0 6.2 1.4 8.3 4.1 2 2.8 2.6 5.7 1.7 8.9L78.9 69.7H129z"
                                        opacity=".15" fill="#47bef2"></path>
                                </svg>
                            </h2>
                            <h3>{languageManager.join_now_subtitle}</h3>
                            <div className="text-block">
                                <p>{languageManager.join_now_text[0]} <span>{languageManager.join_now_text[1]}</span>{languageManager.join_now_text[2]}
                                <span>{languageManager.join_now_text[3]}</span> {languageManager.join_now_text[4]}</p>
                                <p>{languageManager.join_now_text[5]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="section--join-now bottom-svg" viewBox="0 0 1366 158.4"
                 preserveAspectRatio="none">
                <path d="M0 158.4c1.2-.3 2.4-.7 3.7-1C406.9 39.3 925.3-15.4 1366 9.9V0H0v158.4z" fill="#f2f2f2"></path>
            </svg>
        </div>
    )
}
export default JoinNow;