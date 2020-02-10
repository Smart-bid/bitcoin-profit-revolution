import React from 'react'

const WhyJoin = props => {
    let languageManager = props.languageManager();
    return (
        <div className="WhyJoin">
            <div className="container">
                <h2 className={"headline"}>
                    <span className="hundred">{languageManager.join_title[0]}</span>
                    <span className="subheadline">{languageManager.join_title[1]}</span>
                </h2>
                <div className="famous-people">
                    <div className="cards--grid-4">
                        {
                            languageManager.join_description.map((item, index) => {
                                return (
                                    <div className={"card--grey"} key={index}>
                                        <div className={`card--img ` + item.class}></div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1041.7 1041.7">
                        <path d="M978.3 146.9c-22.6 204.4.2 465.4 58 662.8 26.4 90.3-47.9 179-141.5 168.6-204.4-22.6-465.4.2-662.8 58-90.3 26.4-179-47.9-168.6-141.5C86 690.4 63.2 429.4 5.4 232-21 141.7 53.3 53 146.9 63.4c204.4 22.6 465.4-.2 662.8-58 90.4-26.4 179 47.9 168.6 141.5z" fill="#def6ff"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default WhyJoin;