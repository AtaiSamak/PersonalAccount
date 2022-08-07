import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactsAPI from "../../api/contacts";
import { RootStore } from "../../store/rootTypes";
import styles from "../../styles/contacts/contacts.module.scss";
import ContactsFooter from "./ContactsFooter";
import ContactsHeader from "./ContactsHeader";
import ContactsItem from "./ContactsItem";

const Contacts: FC = () => {
    const contacts = useSelector((store: RootStore) => store.contacts);

    useEffect(() => {
        ContactsAPI.update(contacts);
    }, [contacts]);

    return (
        <div className={styles.container}>
            <ContactsHeader />
            <main className={styles.main}>
                {contacts.map(({ firstname, lastname, email, id }) => (
                    <ContactsItem
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        key={id}
                        id={id}
                    />
                ))}
            </main>
            <ContactsFooter />
        </div>
    );
};

export default Contacts;
