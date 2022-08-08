import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Input from "../ui/Input";
import modalStyles from "../../styles/common/modal.module.scss";
import { useDispatch } from "react-redux";
import ContactsActions from "../../store/contacts/contactsActions";

enum InputStateEnum {
    FIRSTNAME,
    LASTNAME,
    EMAIL,
}

type ContactsEditProps = {
    firstname: string;
    lastname: string;
    email: string;
    contactID: string;
    closeModal: () => void;
};

const ContactsEdit: FC<ContactsEditProps> = ({
    closeModal,
    contactID,
    ...props
}) => {
    const [firstname, setFirstname] = useState(props.firstname);
    const [lastname, setLastname] = useState(props.lastname);
    const [email, setEmail] = useState(props.email);
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        closeModal();
        dispatch(
            ContactsActions.edit(contactID, {
                firstname,
                lastname,
                email,
                id: contactID,
            })
        );
    };

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

export default ContactsEdit;
