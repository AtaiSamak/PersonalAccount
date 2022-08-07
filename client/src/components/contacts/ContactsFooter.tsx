import React, { FC } from "react";
import contactsStyles from "../../styles/contacts/contacts.module.scss";
import styles from "../../styles/contacts/contactsFooter.module.scss";
import Modal from "../common/Modal";
import ContactsAdd from "./ContactsAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";

const ContactsFooter: FC = () => {
    const { modal, openModal, closeModal } = useModal();

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
                    <ContactsAdd closeModal={closeModal} />
                </Modal>
            ) : null}
        </>
    );
};

export default ContactsFooter;
