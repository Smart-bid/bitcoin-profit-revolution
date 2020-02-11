import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Button = props => {
    return (
        <div className={"btn-block"}>
            <Link className={"brown-btn"}
                  to="section6"
                  spy={true}
                  smooth={false}
                  offset={0}
                  duration= {500}>{props.children}</Link>
        </div>
    )
};
export default Button;