import { Contact } from "../types/contact";
import { UserLogin } from "../types/user";

class APIHelpers {
    static async fetchPost(url: string, data: UserLogin | Contact) {
        return await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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

export default APIHelpers;
