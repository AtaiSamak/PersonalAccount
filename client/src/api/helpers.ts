import { Contact } from "../types/contact";
import { UserLogin } from "../types/user";

class APIHelpers {
    static async fetchUpdate(url: string, data: object) {
        return await fetch(url, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                console.log(response);
                if (response && !response.ok) throw Error(response.statusText);
                return await response.json();
            })
            .catch((error) => {
                throw Error(error);
            });
    }

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
