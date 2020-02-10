import React from 'react'

const Button = props => {
    return (
        <div className={"btn-block"}>
            <button className={"brown-btn"}>{props.children}</button>
        </div>
    )
};
export default Button;