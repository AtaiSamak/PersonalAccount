import React, { FC, useState } from "react";
import contactsStyles from "../../styles/contacts/contacts.module.scss";
import styles from "../../styles/contacts/contactsFooter.module.scss";
import Modal from "../common/Modal";
import ContactsAdd from "./ContactsAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ContactsFooter: FC = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <footer className={styles.footer}>
                <button className={contactsStyles.button} onClick={openModal}>
                    Add new contact
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </footer>
            {modal ? (
                <Modal closeHandle={closeModal}>
                    <ContactsAdd />
                </Modal>
            ) : null}
        </>
    );
};

export default ContactsFooter;
