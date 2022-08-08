import rootStore from "../store/rootStore";
import { Contact } from "../types/contact";
import APIHelpers from "./helpers";
import { ContactsURL } from "./url";

class ContactsAPI {
    static async update(contacts: Contact[]) {
        const userID = rootStore.getState().user?.id;
        if (!userID) throw new Error("Not logged");
        return await fetch(ContactsURL.ROOT + userID, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({ contacts }),
        })
            .then(async (response) => {
                if (response && !response.ok) throw Error(response.statusText);
                return await response.json();
            })
            .catch((error) => {
                throw Error(error);
            });
    }
}

export default ContactsAPI;
