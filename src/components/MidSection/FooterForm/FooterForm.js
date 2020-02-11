import React from 'react'
import Regform from "../../TopSection/Regform/Regform";
import logo from "../../TopSection/logo.svg";

const FooterForm = props => {
    let languageManager = props.languageManager(),
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
        <div className={"FooterForm"} id={"section6"}>
            <div className="container">
                <h2 className={"headline"}>
                    <span className="hundred">{languageManager.last_title[0]}</span>
                    <span className="subheadline">{languageManager.last_title[1]}</span>
                </h2>
                <div className="row">
                    <div className="col-lg-5 offset-lg-1">
                        <div className="form-text">
                            <p>{languageManager.doted_block[0]}</p>
                            <h3>{languageManager.doted_block[1]}</h3>
                            <ul>
                                <li>{languageManager.doted_block[2]}</li>
                                <li>{languageManager.doted_block[3]}</li>
                                <li>{languageManager.doted_block[4]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-form">
                            <div className="regform">
                                <Regform {...props}
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
        </div>
    )
};
export default FooterForm;