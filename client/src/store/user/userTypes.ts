import { User } from "../../types/user";

export enum UserActionTypesEnum {
    SET,
}

export type UserActionObject = {
    type: UserActionTypesEnum;
    payload: {
        user: User;
    };
};
