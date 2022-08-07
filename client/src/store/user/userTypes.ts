import { User } from "../../types/user";

export enum UserActionTypesEnum {
    SET = "user/set",
    UNSET = "user/unset",
}

export type UserActionObject = {
    type: UserActionTypesEnum;
    payload: {
        user: User;
    };
};
