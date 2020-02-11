import React from 'react'

const HowItWorks = props => {
    let languageManager = props.languageManager();
    return (
        <div className="HowItWorks" id={"section1"}>
            <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" className="section--grey-blob top-svg" viewBox="0 0 1366 158.4"
                     preserveAspectRatio="none">
                    <path d="M1366 0c-1.2.3-2.4.7-3.7 1C959.1 119.1 440.7 173.8 0 148.5v9.9h1366V0z" fill="#f2f2f2"></path>
                </svg>
                <h2 className={"headline"}>
                    <span className="hundred">{languageManager.how_it_works_title[0]}</span>
                    <span className="subheadline">{languageManager.how_it_works_title[1]}</span>
                </h2>
                <div className="cards--grid-2">
                    <div className="card--blue">
                        <div className="howItWorksIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="icon_network.min">
                                <path d="M84.33 129l-2.7-1.1 1-2.33 2.56 1zm31.44 0l-.88-2.38 2.55-1 1 2.32-2.67 1.06zM79 126.67l-2.54-1.43 1.3-2.17 2.4 1.35zm42.1 0l-1.18-2.25 2.4-1.36 1.32 2.18-2.55 1.4zm-47.1-3l-2.34-1.74 1.58-2 2.2 1.64zm52.07 0l-1.46-2.08 2.2-1.65 1.58 2-2.34 1.67zM69.44 120l-2.1-2 1.82-1.77 2 1.9zm61.18 0l-1.7-1.88 2-1.9 1.83 1.76-2.12 2.03zm-65.25-4.13l-1.82-2.28 2-1.52 1.72 2.15zm69.3-.06l-1.94-1.64 1.72-2.16 2 1.52-1.78 2.25zm-72.8-4.6l-1.5-2.48 2.2-1.26L64 109.8zm76.3-.06l-2.17-1.42 1.43-2.36 2.2 1.25c-.43.84-.94 1.68-1.47 2.5zm-79.17-5l-1.2-2.67 2.36-1L61.3 105zm82-.1l-2.3-1.1 1.12-2.52 2.35.95A23.42 23.42 0 0 1 141 106zm-84.2-5.34l-.83-2.8 2.45-.65.8 2.64zm86.42-.1l-2.4-.8.78-2.64 2.46.64-.83 2.8zm-87.9-5.54l-.46-2.88 2.5-.33.45 2.72zM144.7 95l-2.5-.48.43-2.72 2.52.32-.46 2.88zm-90.13-5.7l-.1-2.92H57l.1 2.75zm90.86-.1l-2.53-.2.1-2.75v-.2h2.54v.2l-.1 2.93zM57.1 83.6l-2.54-.15.27-2.9 2.52.3-.25 2.74zm85.8-.28l-.27-2.74 2.5-.33.3 2.9zm-85.1-5.18l-2.5-.47.64-2.85 2.46.64-.6 2.68zm84.4-.27l-.62-2.7 2.45-.65.66 2.84zm-83-5.06L56.74 72l1-2.75 2.36 1-.95 2.57zm81.6-.27l-1-2.58 2.35-1 1 2.73zM61.2 67.7l-2.3-1.1 1.35-2.6 2.2 1.25c-.48.8-.87 1.6-1.27 2.44zm77.45-.25l-1.28-2.43 2.2-1.26q.72 1.27 1.35 2.58zM63.9 62.9l-2.13-1.4 1.67-2.4 2 1.5-1.54 2.27zm72-.23l-1.58-2.25 2-1.53 1.67 2.4zm-68.7-4.2l-1.94-1.65 2-2.16 1.83 1.76c-.68.66-1.3 1.35-1.9 2.05zm65.43-.2l-1.86-2 1.82-1.77 2 2.15zM71 54.52l-1.7-1.87 2.2-1.9 1.6 2-2.1 1.77zm57.77-.18l-2.1-1.78 1.58-2 2.23 1.9zm-53.45-3.26L73.86 49l2.43-1.6 1.33 2.17c-.78.43-1.56.98-2.3 1.5zm49.15-.16l-2.3-1.5 1.3-2.18 2.45 1.6zM80 48.2L78.83 46l2.62-1.28 1 2.32c-.8.33-1.63.74-2.45 1.17zm39.74-.14l-2.48-1.2 1-2.32 2.63 1.26zM85 46l-.9-2.38 2.77-.93.73 2.43c-.85.23-1.72.52-2.6.88zm29.67-.1l-2.6-.86.7-2.44 2.78.9zM90.3 44.38l-.57-2.48 2.86-.56.4 2.5-2.7.53zm19.12-.07l-2.7-.5.4-2.5 2.87.54zm-13.7-.82l-.25-2.5 2.9-.2.1 2.54c-.92 0-1.84.06-2.75.15zm8.26 0l-2.76-.17.08-2.54c1 0 2 .1 2.9.18z" fill="#fff"></path>
                                <path d="M122.5 140.65c0 5.6-10.07 10.13-22.5 10.13s-22.5-4.53-22.5-10.13 10.07-10.12 22.5-10.12 22.5 4.53 22.5 10.12z" fill="#1d1d1b" opacity=".1"></path>
                                <path d="M100 54.66a31.62 31.62 0 0 0-31.62 31.61 33.09 33.09 0 0 0 6.55 19.26L100 140.65l25.06-35.12a33.12 33.12 0 0 0 6.54-19.26A31.6 31.6 0 0 0 100 54.66z" fill="#e6625c"></path>
                                <path d="M122.5 86.27a22.5 22.5 0 1 1-22.5-22.5 22.47 22.47 0 0 1 22.49 22.5z" fill="#fff"></path>
                                <g fill="#454c50">
                                    <path d="M100 102.73a16.47 16.47 0 1 1 16.45-16.46A16.49 16.49 0 0 1 100 102.73zm0-30.83a14.37 14.37 0 1 0 14.37 14.37A14.39 14.39 0 0 0 100 71.9z"></path>
                                    <path d="M100 102.73c-4.92 0-8.77-7.23-8.77-16.46S95.08 69.8 100 69.8v2.1c-3.62 0-6.67 6.58-6.67 14.37s3 14.37 6.67 14.37zm0 0v-2.1c3.6 0 6.65-6.58 6.65-14.37S103.6 71.9 100 71.9v-2.1c4.9 0 8.75 7.24 8.75 16.47s-3.85 16.46-8.75 16.46z"></path>
                                    <path d="M98.95 70.85h2.1v30.83h-2.1z"></path>
                                    <path d="M84.58 85.22h30.83v2.1H84.58zM100 79.6a39.4 39.4 0 0 1-12.37-2l.66-2a37.76 37.76 0 0 0 23.41 0l.65 2a39.32 39.32 0 0 1-12.35 2zM88.3 96.9l-.66-2a39.86 39.86 0 0 1 24.72 0l-.65 2a37.76 37.76 0 0 0-23.41 0z"></path>
                                </g>
                                <path d="M148.2 125.57a13.5 13.5 0 0 0-13.49 13.49 14.11 14.11 0 0 0 2.8 8.22l10.7 15 10.7-15a14.12 14.12 0 0 0 2.79-8.22 13.48 13.48 0 0 0-13.49-13.49z" fill="#e6625c"></path>
                                <path d="M153.2 139.06a5 5 0 1 1-5-5 5 5 0 0 1 5 5z" fill="#fff"></path>
                                <path d="M51.77 125.57a13.49 13.49 0 0 0-13.49 13.49 14.17 14.17 0 0 0 2.79 8.22l10.7 15 10.7-15a14.19 14.19 0 0 0 2.79-8.22 13.49 13.49 0 0 0-13.49-13.49z" fill="#e6625c"></path>
                                <path d="M56.76 139.06a5 5 0 1 1-5-5 5 5 0 0 1 5 5z" fill="#fff"></path>
                                <path d="M99 31.82a4.55 4.55 0 1 1-4.55-4.55A4.55 4.55 0 0 1 99 31.82zm-36.33 41.9a5.22 5.22 0 1 1-5.21-5.22 5.21 5.21 0 0 1 5.21 5.22z" fill="#454c50"></path>
                                <path d="M131.75 49.07a7.75 7.75 0 1 1-7.75-7.74 7.76 7.76 0 0 1 7.75 7.74zM48 58.3a3.63 3.63 0 1 1-3.62-3.63A3.63 3.63 0 0 1 48 58.29z" fill="#fff"></path>
                                <path d="M34.65 97.65a1.82 1.82 0 1 1-1.82-1.81 1.82 1.82 0 0 1 1.82 1.81z" fill="#454c50"></path>
                                <path d="M157.24 70.85a1.36 1.36 0 1 1-1.36-1.36 1.36 1.36 0 0 1 1.36 1.36zm1.32 26.05a2.68 2.68 0 1 1-2.68-2.68 2.68 2.68 0 0 1 2.68 2.68z" fill="#fff"></path>
                                <path d="M145.84 76.32a2.72 2.72 0 1 1-2.72-2.72 2.71 2.71 0 0 1 2.72 2.72z" fill="#454c50"></path>
                            </svg>
                        </div>
                        <h2 className="title">{languageManager.how_it_works_description[0].title}</h2>
                        <p className="description"><strong>{languageManager.how_it_works_description[0].text[0]} </strong>
                            {languageManager.how_it_works_description[0].text[1]} <span>{languageManager.how_it_works_description[0].links}</span>
                            {languageManager.how_it_works_description[0].text[2]}<strong>{languageManager.how_it_works_description[0].text[0]} </strong>
                            {languageManager.how_it_works_description[0].text[3]}</p>
                        <p className="small-descriprion">{languageManager.how_it_works_description[0].text[4]}</p>
                    </div>
                    <div className="card--blue">
                        <div className="howItWorksIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="icon_realtime.min">
                                <path d="M134.3 100a34.18 34.18 0 0 1-10.06 24.27l10.1 10.1A48.48 48.48 0 0 0 148.58 100z" fill="#fff"></path>
                                <path d="M100 65.7a34.32 34.32 0 0 1 34.31 34.3h14.27A48.59 48.59 0 0 0 100 51.41V65.7z" fill="#454c50"></path>
                                <path d="M100 65.7V51.4a48.09 48.09 0 0 0-18.58 3.71l5.45 13.18a34.23 34.23 0 0 1 13.13-2.6z" fill="#ff7770"></path>
                                <path d="M124.24 124.28a34.31 34.31 0 1 1-37.37-56L81.4 55.12a48.59 48.59 0 1 0 53 79.27z" fill="#e6625c"></path>
                                <path d="M122.86 100A22.87 22.87 0 1 1 100 77.14 22.86 22.86 0 0 1 122.86 100z" fill="#fff"></path>
                                <path d="M89.067 108.52l19.445-19.432 2.425 2.426-19.445 19.432zm16.983 2.92a5.38 5.38 0 1 1 5.38-5.39 5.39 5.39 0 0 1-5.38 5.39zm0-7.33a2 2 0 1 0 2 1.94 2 2 0 0 0-2-1.94zm-12.1-4.78A5.38 5.38 0 1 1 99.32 94a5.39 5.39 0 0 1-5.38 5.33zm0-7.33a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-9.7-49.4a5.89 5.89 0 1 1-5.89-5.88 5.89 5.89 0 0 1 5.89 5.88zM71.37 150a6.75 6.75 0 1 1-6.75-6.75 6.75 6.75 0 0 1 6.75 6.75z" fill="#454c50"></path>
                                <path d="M143.1 49.7a3.32 3.32 0 1 1-3.32-3.32 3.32 3.32 0 0 1 3.32 3.32z" fill="#fff"></path>
                                <path d="M35.94 71.55a2.45 2.45 0 1 1-2.45-2.46 2.45 2.45 0 0 1 2.45 2.46z" fill="#454c50"></path>
                                <path d="M42.7 143.85a2.25 2.25 0 1 1-2.25-2.25 2.25 2.25 0 0 1 2.25 2.25zM156.26 47.4a1.69 1.69 0 1 1-1.69-1.69 1.68 1.68 0 0 1 1.69 1.69zm-8.76 98.14a4.42 4.42 0 1 1-4.41-4.41 4.42 4.42 0 0 1 4.41 4.41z" fill="#fff"></path>
                                <path d="M162.45 80.66a2.25 2.25 0 1 1-2.25-2.26 2.25 2.25 0 0 1 2.25 2.26z" fill="#454c50"></path>
                            </svg>
                        </div>
                        <h2 className="title">{languageManager.how_it_works_description[1].title}</h2>
                        <p className="description">{languageManager.how_it_works_description[1].text[0]}<strong>{languageManager.how_it_works_description[1].text[1]}</strong>
                            {languageManager.how_it_works_description[1].text[2]} <span>{languageManager.how_it_works_description[1].links}</span>
                            {languageManager.how_it_works_description[1].text[3]}<strong>{languageManager.how_it_works_description[1].text[1]} </strong>
                            {languageManager.how_it_works_description[1].text[4]}</p>
                    </div>
                    <div className="card--blue">
                        <div className="howItWorksIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="icon_nextgen.min">
                                <path d="M115.4 156.27H84.6l2.8-15.7h25.18l2.8 15.7z" fill="#e8e8e8"></path>
                                <path d="M123.63 158.57H76.37v-.86a1.45 1.45 0 0 1 1.45-1.44h44.36a1.45 1.45 0 0 1 1.45 1.44zm31.8-28.13v7.45a2.71 2.71 0 0 1-2.71 2.69H47.3a2.71 2.71 0 0 1-2.7-2.69v-7.45z" fill="#fff"></path>
                                <path d="M155.42 130.44V59.68a2.71 2.71 0 0 0-2.71-2.68H47.3a2.7 2.7 0 0 0-2.69 2.69v70.76z" fill="#454c50"></path>
                                <path d="M50.2 62.58h99.62v62.25H50.2z" fill="#fff"></path>
                                <path d="M94.84 33.57h67.96V80.6H94.84z" fill="#43b2de"></path>
                                <path d="M152.25 44.64l-2.77 1.12-2.76 5.26-2.76.44-2.77 2.7-2.76-1.2-3.22-2.48-2.3 3.37-2.77 1.73-2.76-2.14-2.76 1.86-2.76.85-2.77 5.14-2.76 1.57-2.76-2.5-2.76-1.13-2.78 4.75-2.76-1.02-2.76 2.3-2.85.38v6.7l58.33.03v-32.7l-2.97.5-2.76 4.46z" fill="#fff"></path>
                                <path d="M99.9 76.13l-.5-.9 2.83-1.56 2.83-5.9 2.8-.15 2.75-4.48 2.78-.5 2.9-4.06 3.24 1.47 2.85 3.25 2.05-3.16 3.2-.92 2.6 2.14 2.53-2.76 2.67-.88 2.74-6.42 3.3-1.98 3 3.98 2.26 1.4 2.73-3.9 2.85 1.1 2.63-2.34 3-.42.14 1-2.7.38-2.87 2.55-2.68-1.05-2.82 4.05-3.25-2-2.55-3.4-2.22 1.34-2.8 6.54-2.85.93-3 3.28-2.93-2.4-2.32.66-2.58 3.97-3.6-4.1-2.28-1.03-2.64 3.72-2.74.48-2.8 4.54-2.72.14-2.7 5.65-3.1 1.72z" fill="#454c50"></path>
                                <path d="M34.13 86.2h46.52v32H34.13z" fill="#e6625c"></path>
                                <path d="M38.63 109.27h2.9v4.3h-2.9zm3.85-3.97h2.9v8.26h-2.9zm3.84 1.83h2.92v6.43h-2.92zm3.85-7.13h2.9v13.55h-2.9zm3.83 2.1h2.9v11.46H54zm3.86-7.24h2.9v18.7h-2.9zm3.84 8.98h2.9v9.72h-2.9zm3.84 1.92h2.9v7.8h-2.9zm3.86-7.8h2.9v15.6h-2.9zm3.83-7.1h2.9v22.7h-2.9z" fill="#fff"></path>
                                <path d="M125.6 87v14.9h14.9A14.9 14.9 0 0 0 125.59 87z" fill="#e8e8e8"></path>
                                <path d="M125.6 101.88V87a14.91 14.91 0 1 0 10.54 25.44z" fill="#454c50"></path>
                                <path d="M125.6 101.88l10.54 10.53a15 15 0 0 0 4.37-10.53z" fill="#85dcff"></path>
                                <path d="M83.64 60.5a15.18 15.18 0 1 1-15.18-15.18A15.18 15.18 0 0 1 83.64 60.5z" fill="#e6625c"></path>
                                <g fill="#fff">
                                    <path d="M69.53 68.23h-2.15a4.52 4.52 0 0 1-4.51-4.51h2.58a1.9 1.9 0 0 0 .55 1.37 1.92 1.92 0 0 0 1.36.56h2.15a2 2 0 0 0 1.38-.57 1.92 1.92 0 0 0 .55-1.36 1.89 1.89 0 0 0-.57-1.36 1.93 1.93 0 0 0-1.36-.57h-2.13a4.51 4.51 0 0 1 0-9h2.15A4.51 4.51 0 0 1 74 57.28h-2.54a1.93 1.93 0 0 0-1.93-1.93h-2.15a1.93 1.93 0 0 0-1.38 3.3 1.92 1.92 0 0 0 1.36.56h2.15a4.51 4.51 0 1 1 0 9z"></path>
                                    <path d="M67.17 51.06h2.57v3h-2.57zm0 15.88h2.57v3h-2.57z"></path>
                                </g>
                                <path d="M108 114.1a5 5 0 1 1-5-5 5 5 0 0 1 5 5z" fill="#e6625c"></path>
                                <path d="M97.32 93.7a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM45.28 42.4a3.49 3.49 0 1 1-3.49-3.48 3.49 3.49 0 0 1 3.49 3.48z" fill="#454c50"></path>
                            </svg>
                        </div>
                        <h2 className="title">{languageManager.how_it_works_description[2].title}</h2>
                        <p className="description"><strong>{languageManager.how_it_works_description[2].text[0]}</strong>
                            {languageManager.how_it_works_description[2].text[1]} <span>{languageManager.how_it_works_description[2].links}</span>
                            {languageManager.how_it_works_description[2].text[2]}</p>
                    </div>
                    <div className="card--blue">
                        <div className="howItWorksIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="icon_revolution.min">
                                <path d="M44.77 133.44V63.5a3.69 3.69 0 0 1 3.68-3.68h103.1a3.67 3.67 0 0 1 2.6 1.08 3.71 3.71 0 0 1 1.08 2.6v69.95z" fill="#454c50"></path>
                                <path d="M50.9 65.94h98.18v61.36H50.9z" fill="#fff"></path>
                                <path d="M101.54 62.88a1.54 1.54 0 1 1-1.54-1.54 1.54 1.54 0 0 1 1.54 1.54z" fill="#505659"></path>
                                <path d="M100.62 62.88a.62.62 0 0 1-.62.61.62.62 0 0 1 0-1.23.62.62 0 0 1 .62.62zM32.5 133.44v2.46a4.28 4.28 0 0 0 4.29 4.29h126.4a4.3 4.3 0 0 0 4.3-4.29v-2.46z" fill="#fff"></path>
                                <path d="M87.73 133.44h24.54v1.23H87.73z" fill="#d4d6d8"></path>
                                <path d="M57.47 90.92h6.43v5.05h-6.43z" fill="#454c50"></path>
                                <path d="M67.12 81.42h6.43v14.56h-6.43zm9.64 5.74h6.43v8.8h-6.43z" fill="#d4d6d8"></path>
                                <path d="M86.4 72.5h6.43v23.46H86.4z" fill="#e6625c"></path>
                                <path d="M96.04 78.35h6.43v17.62h-6.43z" fill="#d4d6d8"></path>
                                <path d="M57.47 101.33h45v2.45h-45z" fill="#454c50"></path>
                                <path d="M57.47 106.23h45v2.45h-45zm0 4.9h45v2.45h-45zm0 4.9h22.5v2.45h-22.5z" fill="#d4d6d8"></path>
                                <path d="M163.07 76.52H137.3a4.46 4.46 0 0 0-4.44 4.48v54.8a4.45 4.45 0 0 0 4.44 4.43h25.78a4.44 4.44 0 0 0 4.43-4.43V81a4.44 4.44 0 0 0-4.43-4.48z" fill="#454c50"></path>
                                <path d="M135.37 86.15H165v44.42h-29.63z" fill="#fff"></path>
                                <path d="M147.44 136.76a1.2 1.2 0 0 1-1.2-1.2v-.36a1.2 1.2 0 0 1 1.2-1.19h5.5a1.2 1.2 0 0 1 1.19 1.19v.36a1.2 1.2 0 0 1-1.19 1.2zm3.86-55.43a1.11 1.11 0 0 1-1.11 1.12 1.12 1.12 0 1 1 1.11-1.12z" fill="#505659"></path>
                                <path d="M150.63 81.33a.44.44 0 0 1-.44.44.44.44 0 0 1-.46-.44.45.45 0 1 1 .9 0z" fill="#fff"></path>
                                <path d="M148.17 86.15a2 2 0 0 1 2.01 2.01v23.4a2 2 0 0 1-2 2h-37.13a2 2 0 0 1-2-2v-23.4a2 2 0 0 1 2.01-2.01z" fill="#43b2de" fillRule="evenodd"></path>
                                <path d="M114.16 108.25h6.43v1.4h-6.43zm8.16 0h6.43v1.4h-6.43zm8.15 0h6.43v1.4h-6.43zm8.16 0h6.43v1.4h-6.43zm-24.47-8.27h14.58v4.36h-14.58z" fill="#fff"></path>
                                <path d="M109.04 90.17h41.14v5.8h-41.14z" fill="#454c50"></path>
                                <g fillRule="evenodd">
                                    <path d="M140.78 102.16a3.21 3.21 0 1 1-3.2-3.21 3.21 3.21 0 0 1 3.2 3.21z" fill="#fff"></path>
                                    <path d="M145.06 102.16a3.21 3.21 0 1 1-3.21-3.16 3.21 3.21 0 0 1 3.21 3.16z" fill="#454c50"></path>
                                </g>
                                <path d="M139.6 123.03h10.6v3.8h-10.6z" fill="#454c50"></path>
                                <path d="M150.18 117.3h10.6v3.8h-10.6z" fill="#e6625c"></path>
                                <path d="M153.35 90.17h8.47v2.45h-8.47zm0 4.9h8.47v2.45h-8.47zm0 4.9h4.24v2.45h-4.24z" fill="#454c50"></path>
                            </svg>
                        </div>
                        <h2 className="title">{languageManager.how_it_works_description[3].title}</h2>
                        <p className="description">{languageManager.how_it_works_description[3].text[0]}
                            <span>{languageManager.how_it_works_description[3].links[0]}</span>
                            {languageManager.how_it_works_description[3].text[1]}
                            <span>{languageManager.how_it_works_description[3].links[1]}</span>
                            {languageManager.how_it_works_description[3].text[2]}</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="section--grey-blob bottom-svg" viewBox="0 0 1366 158.4"
                     preserveAspectRatio="none">
                    <path d="M0 158.4c1.2-.3 2.4-.7 3.7-1C406.9 39.3 925.3-15.4 1366 9.9V0H0v158.4z"
                          fill="#f2f2f2"></path>
                </svg>
            </div>
        </div>
    )
}
export default HowItWorks;