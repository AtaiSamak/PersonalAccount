import React, { FC, useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import ContactsAPI from "../../api/contacts";
import { RootStore } from "../../store/rootTypes";
import styles from "../../styles/contacts/contacts.module.scss";
import Filters from "../helpers/filters";
import ContactsFooter from "./ContactsFooter";
import ContactsHeader from "./ContactsHeader";
import ContactsItem from "./ContactsItem";

const Contacts: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const contacts = useSelector((store: RootStore) => store.contacts);
    const [visibleContacts, setVisibleContacts] = useState(contacts);

    const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        ContactsAPI.update(contacts);
    }, [contacts]);

    useEffect(() => {
        setVisibleContacts(Filters.byFullname(searchValue, contacts));
    }, [searchValue, contacts]);

    return (
        <div className={styles.container}>
            <ContactsHeader
                searchValue={searchValue}
                handleSearchValueChange={handleSearchValueChange}
            />
            <main className={styles.main}>
                {visibleContacts.map(({ firstname, lastname, email, id }) => (
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
