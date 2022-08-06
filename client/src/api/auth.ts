import { UserLogin } from "../types/user";
import { AuthURL } from "./url";

class Auth {
    private static async _fetchData(url: AuthURL, data: UserLogin) {
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

    static async register(user: UserLogin) {
        return await this._fetchData(AuthURL.REGISTER, user)
            .then((response) => {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("user", JSON.stringify(response.user));
                return response.user;
            })
            .catch((error) => {
                throw Error(error);
            });
    }

    static async login(user: UserLogin) {
        return await this._fetchData(AuthURL.LOGIN, user)
            .then(async (response) => {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("userID", response.user.id);
                return response.user;
            })
            .catch((error) => {
                throw Error(error);
            });
    }

    static async auth() {
        const userID = localStorage.getItem("userID");
        if (!userID) throw new Error("Not logged");
        return await fetch(AuthURL.AUTH + userID, {
            headers: new Headers({
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            }),
        })
            .then(async (response) => {
                return await response.json();
            })
            .catch((error) => {
                throw Error(error);
            });
    }
}

export default Auth;
