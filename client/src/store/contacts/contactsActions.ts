import { Contact } from "../../types/contact";
import { ContactsActionTypesEnum } from "./contactsTypes";

class ContactsActions {
    static ADD = ContactsActionTypesEnum.ADD;
    static SET = ContactsActionTypesEnum.SET;
    static REMOVE = ContactsActionTypesEnum.REMOVE;
    static EDIT = ContactsActionTypesEnum.EDIT;

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

    static edit(id: string, editedUserInfo: Contact) {
        return {
            type: this.EDIT,
            payload: {
                editedUserInfo,
                editedUserID: id,
            },
        };
    }
}

export default ContactsActions;
