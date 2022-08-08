import { Contact } from "../../types/contact";
import ContactsActions from "./contactsActions";
import { ContactsActionObject } from "./contactsTypes";

const contactsReducer = (
    state: Contact[] = [],
    action: ContactsActionObject
) => {
    switch (action.type) {
        case ContactsActions.ADD:
            const stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.push(action.payload.contact);
            return stateCopy;
        case ContactsActions.SET:
            return action.payload.contacts;
        case ContactsActions.REMOVE:
            return state.filter(({ id }) => id !== action.payload.removeID);
        case ContactsActions.EDIT:
            return state.map((user) => {
                if (user.id !== action.payload.editedUserID) return user;
                return action.payload.editedUserInfo;
            });
        default:
            return state;
    }
};

export default contactsReducer;
