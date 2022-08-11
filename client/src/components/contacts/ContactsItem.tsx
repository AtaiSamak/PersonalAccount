import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styles from "../../styles/contacts/contactsItem.module.scss";
import { faPen, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import ContactsActions from "../../store/contacts/contactsActions";
import useModal from "../../hooks/useModal";
import Modal from "../common/Modal";
import ContactsEdit from "./ContactsEdit";
import { ContactWithoutID } from "../../types/contact";

type ContactsItemProps = {
    firstname: string;
    lastname: string;
    email: string;
    id: string;
};

const ContactsItem: FC<ContactsItemProps> = ({
    firstname,
    lastname,
    email,
    id,
}) => {
    const { modal, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(ContactsActions.remove(id));
    };

    const editContact = ({ firstname, lastname, email }: ContactWithoutID) => {
        dispatch(
            ContactsActions.edit(id, {
                firstname,
                lastname,
                email,
                id,
            })
        );
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.details}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            {firstname} {lastname}
                        </div>
                        <div>{email}</div>
                    </div>
                </div>
                <div>
                    <button className={styles.button} onClick={openModal}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                        className={`${styles.button} ${styles.trash}`}
                        onClick={handleRemove}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            {modal ? (
                <Modal closeHandle={closeModal} title="Edit contact">
                    <ContactsEdit
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        closeModal={closeModal}
                        save={editContact}
                    />
                </Modal>
            ) : null}
        </>
    );
};

export default ContactsItem;
