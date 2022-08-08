import React, { FC, ChangeEvent } from "react";
import contactsStyles from "../../styles/contacts/contacts.module.scss";
import styles from "../../styles/contacts/contactsHeader.module.scss";
import { useDispatch } from "react-redux";
import UserActions from "../../store/user/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

type ContactsHeaderProps = {
    searchValue: string;
    handleSearchValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ContactsHeader: FC<ContactsHeaderProps> = ({
    searchValue,
    handleSearchValueChange,
}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(UserActions.unset());
    };

    return (
        <header className={styles.header}>
            <h1>My contacts</h1>
            <input
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchValueChange}
                className={styles.searchInput}
            ></input>
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
