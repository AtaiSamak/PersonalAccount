import React, { FC } from "react";
import styles from "../../styles/auth/authButton.module.scss";

type AuthButtonProps = {
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
};

const AuthButton: FC<AuthButtonProps> = ({ children, ...props }) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} {...props}>
                {children}
            </button>
        </div>
    );
};

export default AuthButton;
