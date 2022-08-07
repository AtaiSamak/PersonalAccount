import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    contacts: contactsReducer,
});

export default rootReducer;
