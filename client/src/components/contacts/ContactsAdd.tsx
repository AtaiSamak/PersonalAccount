import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Input from "../ui/Input";
import modalStyles from "../../styles/common/modal.module.scss";
import { useDispatch } from "react-redux";
import ContactsActions from "../../store/contacts/contactsActions";

enum InputStateEnum {
    FIRSTNAME,
    LASTNAME,
    EMAIL,
}

type ContactsAddProps = {
    closeModal: () => void;
};

const ContactsAdd: FC<ContactsAddProps> = ({ closeModal }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleChange =
        (stateName: InputStateEnum) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            switch (stateName) {
                case InputStateEnum.FIRSTNAME:
                    setFirstname(event.target.value);
                    break;
                case InputStateEnum.LASTNAME:
                    setLastname(event.target.value);
                    break;
                case InputStateEnum.EMAIL:
                    setEmail(event.target.value);
                    break;
            }
        };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(ContactsActions.add({ firstname, lastname, email }));
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="firstname"
                placeholder="First name"
                value={firstname}
                onChange={handleChange(InputStateEnum.FIRSTNAME)}
            />
            <Input
                name="lastname"
                placeholder="Last name"
                value={lastname}
                onChange={handleChange(InputStateEnum.LASTNAME)}
            />
            <Input
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange(InputStateEnum.EMAIL)}
            />
            <button className={modalStyles.modalButton}>Save</button>
        </form>
    );
};

export default ContactsAdd;
