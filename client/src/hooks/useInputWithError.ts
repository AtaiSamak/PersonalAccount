import { useState, ChangeEvent } from "react";

const useInputWithError = (intialValue: string) => {
    const [value, setValue] = useState(intialValue);
    const [error, setError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (error) setError(false);
    };

    return { value, handleChange, error, setError };
};

export default useInputWithError;
