import React, { FC, useState } from "react";
import styles from "../../styles/contacts/contacts.module.scss";
import Modal from "../common/Modal";
import ContactsAdd from "./ContactsAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightFromBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Contacts: FC = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                My contacts
                <button className={`${styles.button} ${styles.logoutButton}`}>
                    Logout
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
            </header>
            <main className={styles.main}>
                I'm the main-content filling the void!
            </main>
            <footer className={styles.footer}>
                <button className={styles.button} onClick={openModal}>
                    Add new contact
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </footer>
            {modal ? (
                <Modal closeHandle={closeModal}>
                    <ContactsAdd />
                </Modal>
            ) : null}
        </div>
    );
};

export default Contacts;
