import React from 'react'

const Steps = props => {
    let languageManager = props.languageManager();
    return (
        <div className={"Steps"} id={"section5"}>
            <h2>{languageManager.join_profit_title}</h2>
            <div className="container">
                <div className="cards--grid-3">
                    <div className="card--blue">
                        <h3>{languageManager.join_profit_step1[0]}</h3>
                        <p className="subtitle">{languageManager.join_profit_step1[1]}</p>
                        <p className="text">{languageManager.join_profit_step1[2]}</p>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={"first-icon"}>
                                <path d="M45.42 44.48h111.03v16.28H45.42z" fill="#454c50"></path>
                                <path d="M45.42 60.77h111.03v94.75H45.42zm40.7-10.87h51.33v5.43H86.13zm-32.57 0H59v5.43h-5.43zm10.86 0h5.43v5.43h-5.43zm10.85 0h5.43v5.43h-5.43z" fill="#fff"></path>
                                <path d="M137.45 49.9h10.86v5.43h-10.86z" fill="#e6625c"></path>
                                <path d="M100.93 74.5l-33 15.36v28.26a49.07 49.07 0 0 0 33 46.37 49.07 49.07 0 0 0 33-46.37V89.85z" fill="#454c50"></path>
                                <path d="M100.93 81.44v76.3a42.81 42.81 0 0 0 26.7-39.64V93.87z" fill="#43b2de"></path>
                                <path d="M74.24 93.87v24.24a42.8 42.8 0 0 0 26.69 39.64V81.44z" fill="#85dcff"></path>
                                <path d="M117.58 118.7a16.65 16.65 0 1 1-16.64-16.65 16.64 16.64 0 0 1 16.64 16.65z" fill="#fff"></path>
                                <g fill="#454c50">
                                    <path d="M91.8 119.036l3.408-3.408 7.403 7.403-3.408 3.408z"></path>
                                    <path d="M99.195 126.44l-3.408-3.408 12.084-12.084 3.408 3.408zM65.03 74.04h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.77 0h3.38v3.38H51.5zm112.92 10.64h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-1.56 45.6h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zM62.2 138h3.38v3.38H62.2zm-6.76 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm4.52-52.02h3.38v3.38H53.2zm-6.77 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.77 0h3.38v3.38H32.9zm131.65 28.68h3.38v3.38h-3.38zm-6.75 0h3.38v3.38h-3.38zm-6.77 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm3.8-38.24h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zM56.57 97.75h3.38v3.38h-3.38zm-6.77 0h3.38v3.38H49.8zm96.72 44.62h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm11.14-73.8h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38zm-105.3 58.46h3.38v3.38h-3.38zm-6.76 0h3.38v3.38h-3.38z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="card--blue">
                        <h3>{languageManager.join_profit_step2[0]}</h3>
                        <p className="subtitle">{languageManager.join_profit_step2[1]}</p>
                        <p className="text">{languageManager.join_profit_step2[2]}</p>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    d="M151.44 54.6a4.93 4.93 0 0 1 4.92 4.92v57a4.92 4.92 0 0 1-4.91 4.91H61a4.87 4.87 0 0 1-3.48-1.43 5 5 0 0 1-1.44-3.48v-57A4.92 4.92 0 0 1 61 54.6z"
                                    fill="#e6625c" fillRule="evenodd"></path>
                                <path d="M56.08 64.4h100.28v14.16H56.08z" fill="#454c50"></path>
                                <path
                                    d="M139 78.55a4.92 4.92 0 0 1 4.91 4.92v57a4.9 4.9 0 0 1-4.9 4.91H48.55a4.9 4.9 0 0 1-4.91-4.91v-57A4.91 4.91 0 0 1 45.08 80a5 5 0 0 1 3.47-1.44z"
                                    fill="#fff" className="F"></path>
                                <g fill="#454c50">
                                    <path d="M56.13 135.2H71.8v3.4H56.13zm19.87 0h15.68v3.4H76z"></path>
                                    <path d="M111.56 138.6H95.88v-3.4h15.68v3.4zm19.87 0h-15.67l-.01-3.4h15.68v3.4z"
                                          className="F"></path>
                                </g>
                                <path d="M98.27 112a13.49 13.49 0 1 1-13.49-13.51A13.48 13.48 0 0 1 98.27 112z"
                                      fill="#e6625c" fillRule="evenodd"></path>
                                <path d="M116.26 112a13.49 13.49 0 1 1-13.5-13.49 13.49 13.49 0 0 1 13.5 13.49z"
                                      fill="#454c50" fillRule="evenodd"></path>
                                <path d="M43.64 85.36h100.28v3.38H43.64z" fill="#e6625c"></path>
                                <path
                                    d="M56.13 110.28h7.84v3.4h-7.84zm67.47 0h7.85v3.4h-7.85zm42.87-55.4h-4.04v-6.34h-6.34v-4.05h10.38v10.4zM43.9 155.52H33.53v-10.4h4.04v6.34h6.34v4.05zm122.57 0H156.1v-4.05h6.34v-6.34h4.04v10.4zM37.57 54.87h-4.05l.01-10.4H43.9v4.05h-6.34v6.34z"
                                    fill="#454c50"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="card--blue">
                        <h3>{languageManager.join_profit_step3[0]}</h3>
                        <p className="subtitle">{languageManager.join_profit_step3[1]}</p>
                        <p className="text">{languageManager.join_profit_step3[2]}</p>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path d="M117 153.2H86.1l2.8-15.74h25.26L117 153.2z" fill="#e8e8e8"></path>
                                <path d="M125.25 155.52h-47.4v-.87a1.43 1.43 0 0 1 1.45-1.44h44.5a1.43 1.43 0 0 1 1.45 1.44zm31.9-28.22v7.48a2.72 2.72 0 0 1-2.71 2.7H48.66a2.71 2.71 0 0 1-2.7-2.7v-7.48z" fill="#fff"></path>
                                <path d="M157.14 127.3v-71a2.72 2.72 0 0 0-2.71-2.7H48.66A2.71 2.71 0 0 0 46 56.3v71z" fill="#454c50"></path>
                                <path d="M51.57 59.2h99.95v62.46H51.57z" fill="#fff"></path>
                                <path d="M96.36 30.1h68.18v47.2H96.36z" fill="#43b2de"></path>
                                <path d="M153.96 41.2l-2.77 1.13-2.78 5.26-2.76.45-2.78 2.7-2.77-1.2-3.23-2.5-2.32 3.38-2.78 1.73-2.76-2.14-2.78 1.87-2.76.85-2.78 5.15-2.77 1.58-2.78-2.5-2.76-1.13-2.8 4.77-2.77-1.03-2.77 2.32-2.86.38v6.72l58.53.03V36.23l-2.98.5-2.78 4.48z" fill="#fff"></path>
                                <path d="M101.44 72.8l-.5-.9 2.83-1.57 2.84-5.9 2.8-.15 2.76-4.5 2.8-.5 2.9-4.07 3.25 1.47 2.86 3.26 2.05-3.17 3.22-.92 2.6 2.14 2.54-2.77 2.68-.87 2.74-6.45 3.3-2 3 4 2.27 1.4 2.73-3.93 2.87 1.12 2.64-2.35 3.02-.43.14 1.02-2.7.38-2.88 2.56-2.7-1.05-2.84 4.06-3.26-2.02-2.55-3.4-2.23 1.34-2.8 6.57-2.87.93-3 3.3-2.93-2.4-2.34.66-2.58 4-3.6-4.12-2.28-1.03-2.65 3.73-2.75.48-2.8 4.56-2.74.14-2.72 5.67-3.12 1.73z" fill="#454c50"></path>
                                <path d="M35.46 82.9h46.67v32.12H35.46z" fill="#e6625c"></path>
                                <path d="M39.98 106.06h2.92v4.3h-2.92zm3.85-4h2.92v8.3h-2.92zm3.87 1.83h2.92v6.45H47.7zm3.85-7.14h2.92v13.6h-2.92zm3.85 2.1h2.92v11.5H55.4zm3.86-7.26h2.92v18.76h-2.92zm3.86 9h2.92v9.75h-2.92zm3.85 1.93h2.92v7.83h-2.92zm3.86-7.83h2.92v15.65h-2.92zm3.87-7.1h2.92v22.77H74.7z" fill="#fff"></path>
                                <path d="M127.22 83.67v15h15a15 15 0 0 0-15-15z" fill="#e8e8e8"></path>
                                <path d="M127.22 98.63v-15a15 15 0 1 0 10.57 25.53z" fill="#454c50"></path>
                                <path d="M127.22 98.63l10.57 10.57a15 15 0 0 0 4.39-10.57z" fill="#85dcff"></path>
                                <path d="M85.13 57.13A15.23 15.23 0 1 1 69.9 41.89a15.23 15.23 0 0 1 15.23 15.24z" fill="#e6625c"></path>
                                <g fill="#fff">
                                    <path d="M71 64.87h-2.18a4.51 4.51 0 0 1-4.52-4.52h2.58a1.95 1.95 0 0 0 1.94 1.94H71a1.91 1.91 0 0 0 1.94-1.94A1.93 1.93 0 0 0 71 58.42h-2.18a4.52 4.52 0 1 1 0-9.05H71a4.51 4.51 0 0 1 4.53 4.52H72.9a1.9 1.9 0 0 0-.57-1.37A1.93 1.93 0 0 0 71 52h-2.18a2 2 0 0 0-1.37.56 1.94 1.94 0 0 0 1.37 3.31H71a4.52 4.52 0 0 1 4.53 4.52A4.52 4.52 0 0 1 71 64.87z"></path>
                                    <path d="M68.6 47.65h2.58v3.02H68.6zm0 15.93h2.58v3.02H68.6z"></path>
                                </g>
                                <path d="M109.6 110.9a5 5 0 1 1-5-5 5 5 0 0 1 5 5z" fill="#e6625c"></path>
                                <path d="M98.86 90.44a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM46.64 39a3.5 3.5 0 1 1-3.5-3.5 3.5 3.5 0 0 1 3.5 3.5z" fill="#454c50"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Steps;