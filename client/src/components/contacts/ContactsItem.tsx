import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styles from "../../styles/contacts/contactsItem.module.scss";
import { faPen, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import ContactsActions from "../../store/contacts/contactsActions";

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
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(ContactsActions.remove(id));
    };

    return (
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
                <button className={styles.button}>
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
    );
};

export default ContactsItem;
