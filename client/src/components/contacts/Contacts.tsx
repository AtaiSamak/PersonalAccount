import React, { FC } from "react";
import styles from "../../styles/contacts/contacts.module.scss";
import ContactsFooter from "./ContactsFooter";
import ContactsHeader from "./ContactsHeader";
import ContactsItem from "./ContactsItem";

const Contacts: FC = () => {
    return (
        <div className={styles.container}>
            <ContactsHeader />
            <main className={styles.main}>
                <ContactsItem
                    firstname="atai"
                    lastname="samakov"
                    email="ataisamak@gmail.com"
                    id={0}
                />
            </main>
            <ContactsFooter />
        </div>
    );
};

export default Contacts;
