import React, { FC } from "react";
import contactsStyles from "../../styles/contacts/contacts.module.scss";
import styles from "../../styles/contacts/contactsHeader.module.scss";
import { useDispatch } from "react-redux";
import UserActions from "../../store/user/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ContactsHeader: FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(UserActions.unset());
    };

    return (
        <header className={styles.header}>
            My contacts
            <button
                className={`${contactsStyles.button} ${contactsStyles.logoutButton}`}
                onClick={handleLogout}
            >
                Logout
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </header>
    );
};

export default ContactsHeader;
