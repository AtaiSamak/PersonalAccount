import { User } from "../../types/user";
import { UserActionTypesEnum } from "./userTypes";

class UserActions {
    static SET = UserActionTypesEnum.SET;
    static UNSET = UserActionTypesEnum.UNSET;

    static set = (user: User) => {
        return {
            type: this.SET,
            payload: {
                user,
            },
        };
    };

    static unset = () => {
        return {
            type: this.UNSET,
        };
    };
}

export default UserActions;
