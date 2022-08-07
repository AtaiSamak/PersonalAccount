import { User } from "../../types/user";

export enum UserActionTypesEnum {
    SET,
    UNSET,
}

export type UserActionObject = {
    type: UserActionTypesEnum;
    payload: {
        user: User;
    };
};
