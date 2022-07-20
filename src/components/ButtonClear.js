import React from "react";
import '../stylesheets/ButtonClear.css'

function ButtonClear(props) {
    return (
        <button className="ButtonClear" onClick={props.manageClear}>
            {props.children}
        </button>
    )
}

export default ButtonClear