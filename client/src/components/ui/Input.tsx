import React, { ChangeEvent, FC } from "react";
import styles from "../../styles/ui/input.module.scss";

type InputProps = {
    name: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error?: boolean;
};

const Input: FC<InputProps> = ({
    value,
    onChange,
    name,
    placeholder,
    error,
}) => {
    const container = error
        ? `${styles.container} ${styles.error}`
        : styles.container;

    return (
        <div className={container}>
            <input
                type="input"
                placeholder={placeholder}
                name={name}
                id={name}
                className={styles.input}
                value={value}
                onChange={onChange}
            ></input>
            <label className={styles.label} htmlFor={name}>
                {placeholder}
            </label>
        </div>
    );
};

export default Input;
