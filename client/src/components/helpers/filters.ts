import { Contact } from "../../types/contact";

class Filters {
    static byFullname(searchValue: string, contacts: Contact[]) {
        return contacts.filter(
            ({ firstname, lastname }) =>
                `${firstname} ${lastname}`
                    .toLowerCase()
                    .indexOf(searchValue.toLowerCase()) > -1
        );
    }
}

export default Filters;
