import React, { FC } from "react";
import contactsStyles from "../../styles/contacts/contacts.module.scss";
import styles from "../../styles/contacts/contactsFooter.module.scss";
import Modal from "../common/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import ContactsActions from "../../store/contacts/contactsActions";
import { ContactWithoutID } from "../../types/contact";
import ContactsEdit from "./ContactsEdit";

const ContactsFooter: FC = () => {
    const { modal, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    const addContact = ({ firstname, lastname, email }: ContactWithoutID) => {
        dispatch(ContactsActions.add({ firstname, lastname, email }));
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
                <Modal closeHandle={closeModal} title="Add contact">
                    <ContactsEdit closeModal={closeModal} save={addContact} />
                </Modal>
            ) : null}
        </>
    );
};

export default ContactsFooter;
