import React from "react";

import styles from "../../../public/styles/signinUp.module.scss";

function Input(props) {

    const { icon, label, type, refInput } = props;
    
    return (
        <div className="d-flex">
            <span className={styles["input-icon"]}>{icon}</span>
            <input ref={refInput} className={styles["input"]} type={type}  placeholder={label} />
        </div>
    )
}

export default Input;