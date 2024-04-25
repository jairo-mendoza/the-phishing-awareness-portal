import React from 'react';
import { Form } from 'react-bootstrap';

interface FormInputProps {
    label: string;
    name: string;
    type: string;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type, name, label, handleFormChange }) => {
    return (
        <Form.Group className="mb-3" controlId={`${name}Field`}>
            <Form.FloatingLabel controlId={`${name}FieldLabel`} label={label} className="mb-3">
                {/* name prop matches the textbox to the form data */}
                <Form.Control
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={handleFormChange}
                    required
                />
            </Form.FloatingLabel>
        </Form.Group>
    );
};

export default FormInput;
