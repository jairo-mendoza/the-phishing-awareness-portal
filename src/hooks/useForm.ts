import { useState, ChangeEvent } from 'react';

// Form data can have any number of props, but values must be strings
// This allows flexibility for different forms. Example: login form vs registration form
type FormData = { [key: string]: string };

const useForm = (initialState: FormData) => {
    const [formData, setData] = useState<FormData>(initialState);

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...formData, [e.target.name]: e.target.value });
    };

    return { formData, handleFormChange };
};

export default useForm;
