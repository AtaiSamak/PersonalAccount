import React, { FC, useEffect } from "react";
import styles from "../styles/app.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./auth";
import Contacts from "./contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/rootTypes";
import AuthAPI from "../api/auth";
import UserActions from "../store/user/userActions";

const App: FC = () => {
    const user = useSelector((store: RootStore) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        AuthAPI.auth().then(({ email, id }) => {
            dispatch(UserActions.set({ email, id }));
        });
    }, []);

    useEffect(() => {
        user ? navigate("/contacts") : navigate("auth");
    }, [user]);

    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
};

export default App;
