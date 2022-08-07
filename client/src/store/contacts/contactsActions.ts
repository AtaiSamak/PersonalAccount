import { Contact } from "../../types/contact";
import { ContactsActionTypesEnum } from "./contactsTypes";

class ContactsActions {
    static ADD = ContactsActionTypesEnum.ADD;
    static SET = ContactsActionTypesEnum.SET;
    static REMOVE = ContactsActionTypesEnum.REMOVE;

    static add(contactData: {
        firstname: string;
        lastname: string;
        email: string;
    }) {
        return {
            type: this.ADD,
            payload: {
                contact: {
                    ...contactData,
                    id: Math.random().toString().slice(2),
                },
            },
        };
    }

    static set(contacts: Contact[]) {
        return {
            type: this.SET,
            payload: {
                contacts,
            },
        };
    }

    static remove(id: string) {
        return {
            type: this.REMOVE,
            payload: {
                removeID: id,
            },
        };
    }
}

export default ContactsActions;
