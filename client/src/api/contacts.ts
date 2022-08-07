import rootStore from "../store/rootStore";
import { Contact } from "../types/contact";
import APIHelpers from "./helpers";
import { ContactsURL } from "./url";

class ContactsAPI {
    static async update(contacts: Contact[]) {
        const userID = rootStore.getState().user?.id;
        if (!userID) throw new Error("Not logged");
        return APIHelpers.fetchUpdate(ContactsURL.ROOT + userID, {
            contacts,
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .catch((error) => {
                throw Error(error);
            });
    }
}

export default ContactsAPI;
