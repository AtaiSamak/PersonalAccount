import { User } from "../../types/user";
import { UserActionTypesEnum } from "./userTypes";

class UserActions {
    static SET = UserActionTypesEnum.SET;

    static set = (user: User) => {
        return {
            type: this.SET,
            payload: {
                user,
            },
        };
    };
}

export default UserActions;
