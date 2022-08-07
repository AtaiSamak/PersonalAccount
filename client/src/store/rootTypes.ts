import { Contact } from "../types/contact";
import { User } from "../types/user";

export type RootStore = {
    user: User;
    contacts: Contact[];
};
