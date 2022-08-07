import { User } from "../../types/user";
import UserActions from "./userActions";
import { UserActionObject } from "./userTypes";

const userReducer = (state: User | null = null, action: UserActionObject) => {
    switch (action.type) {
        case UserActions.SET:
            return action.payload.user;
        case UserActions.UNSET:
            localStorage.clear();
            return null;
        default:
            return state;
    }
};

export default userReducer;
