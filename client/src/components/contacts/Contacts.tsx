import React, { FC } from "react";
import styles from "../../styles/contacts/contacts.module.scss";

const Contacts: FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>My contacts</header>
            <main className={styles.main}>
                I'm the main-content filling the void!
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Contacts;
