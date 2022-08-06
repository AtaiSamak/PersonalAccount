import React, { ChangeEvent, FC } from "react";
import styles from "../../styles/auth/authInput.module.scss";

type AuthInputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    name?: string;
};

const AuthInput: FC<AuthInputProps> = ({ ...props }) => {
    return (
        <div className={styles.container}>
            <input className={styles.input} {...props}></input>
            <span className={styles.focusEffect}></span>
        </div>
    );
};

export default AuthInput;
