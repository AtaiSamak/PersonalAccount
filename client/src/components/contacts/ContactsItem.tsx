import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styles from "../../styles/contacts/contactsItem.module.scss";
import { faPen, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

type ContactsItemProps = {
    firstname: string;
    lastname: string;
    email: string;
    id: number;
};

const ContactsItem: FC<ContactsItemProps> = ({
    firstname,
    lastname,
    email,
    id,
}) => {
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
                <button className={`${styles.button} ${styles.trash}`}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ContactsItem;
