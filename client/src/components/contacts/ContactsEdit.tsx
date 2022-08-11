import React, { FC, FormEvent } from "react";
import Input from "../ui/Input";
import modalStyles from "../../styles/common/modal.module.scss";
import useInputWithError from "../../hooks/useInputWithError";
import { ContactWithoutID } from "../../types/contact";

type ContactsEditProps = {
    firstname?: string;
    lastname?: string;
    email?: string;
    closeModal: () => void;
    save: (contact: ContactWithoutID) => void;
};

const ContactsEdit: FC<ContactsEditProps> = ({
    closeModal,
    save,
    ...props
}) => {
    const firstname = useInputWithError(props.firstname || "");
    const lastname = useInputWithError(props.lastname || "");
    const email = useInputWithError(props.email || "");

    const isHaveEmptyInputs = () => {
        const emptyInputs = [firstname, lastname, email].filter(
            ({ value }) => value === ""
        );
        if (emptyInputs.length !== 0) {
            emptyInputs.forEach(({ setError }) => setError(true));
            return true;
        }
        return false;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isHaveEmptyInputs()) return;
        closeModal();
        save({
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="firstname"
                placeholder="First name"
                value={firstname.value}
                onChange={firstname.handleChange}
                error={firstname.error}
            />
            <Input
                name="lastname"
                placeholder="Last name"
                value={lastname.value}
                onChange={lastname.handleChange}
                error={lastname.error}
            />
            <Input
                name="email"
                placeholder="Email"
                value={email.value}
                onChange={email.handleChange}
                error={email.error}
            />
            <button className={modalStyles.modalButton}>Save</button>
        </form>
    );
};

export default ContactsEdit;
