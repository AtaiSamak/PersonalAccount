import { Contact } from "../../types/contact";

export enum ContactsActionTypesEnum {
    ADD = "contacts/add",
    SET = "contacts/set",
    REMOVE = "contacts/remove",
}

export type ContactsActionObject = {
    type: ContactsActionTypesEnum;
    payload: {
        removeID: string;
        contacts: Contact[];
        contact: Contact;
    };
};
