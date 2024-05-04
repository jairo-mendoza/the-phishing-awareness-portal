import { Field, useField } from 'formik';

interface RadioButtonProps {
    name: string;
    value: string;
    defaultChecked?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ name, value, defaultChecked }) => {
    const [field] = useField(name);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            <Field
                type="radio"
                name={name}
                value={value}
                checked={field.value.toString() === value}
            />
            <label htmlFor={value}>{value}</label>
        </div>
    );
};
