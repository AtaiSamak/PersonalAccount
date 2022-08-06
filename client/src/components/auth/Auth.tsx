import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "../../styles/auth/auth.module.scss";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import AuthAPI from "../../api/auth";
import { useDispatch } from "react-redux";
import UserActions from "../../store/user/userActions";

enum InputStateEnum {
    PHONE,
    PASSWORD,
}

const Auth: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AuthAPI.login({ email, password }).then((response) => {
            dispatch(UserActions.set(response));
        });
    };

    const handleChange =
        (stateName: InputStateEnum) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            switch (stateName) {
                case InputStateEnum.PHONE:
                    setEmail(event.target.value);
                    break;
                case InputStateEnum.PASSWORD:
                    setPassword(event.target.value);
                    break;
            }
        };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.header}>Login</h1>
                <AuthInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange(InputStateEnum.PHONE)}
                />
                <AuthInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange(InputStateEnum.PASSWORD)}
                />
                <AuthButton type="submit">Login</AuthButton>
            </form>
        </div>
    );
};

export default Auth;
