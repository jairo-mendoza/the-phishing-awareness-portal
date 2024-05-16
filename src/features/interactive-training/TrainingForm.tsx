/* This form will appear before the training so the user can decide what type of training they want to do */

import Button from 'react-bootstrap/Button';
import { RadioButton } from '@/components/RadioButton';
import { Formik, Form } from 'formik';
import Stack from 'react-bootstrap/Stack';
import { TrainingMediums } from './types';

interface TrainingFormProps {
    handleConfigChange: (values: { medium: string; difficulty: string }) => void;
}

export const TrainingForm: React.FC<TrainingFormProps> = ({ handleConfigChange }) => {
    const formMb = 'mb-4';

    return (
        <div>
            <h3>Let's get your training started!</h3>
            <h6>What type of training do you want to do?</h6>

            <Formik
                initialValues={{
                    medium: 'Both',
                    difficulty: '0',
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log('Value: ', values);
                    resetForm();
                    handleConfigChange(values);
                }}
            >
                <Form>
                    {/* Training Medium */}
                    <Stack
                        direction="horizontal"
                        gap={2}
                        style={{ justifyContent: 'center', maxWidth: '100%', flexWrap: 'wrap' }}
                        className={formMb}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>Medium:</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: '10px' }}>
                            <RadioButton name="medium" value={TrainingMediums.Email} />
                            <RadioButton name="medium" value={TrainingMediums.SMS} />
                            <RadioButton
                                name="medium"
                                value={TrainingMediums.Both}
                                defaultChecked
                            />
                        </div>
                    </Stack>

                    {/* Difficulty */}
                    <Stack
                        direction="horizontal"
                        gap={2}
                        style={{ maxWidth: '100%', flexWrap: 'wrap' }}
                        className={formMb}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>Difficulty:</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: '10px' }}>
                            <RadioButton name="difficulty" value="0" />
                            <RadioButton name="difficulty" value="1" />
                            <RadioButton name="difficulty" value="2" />
                            <RadioButton name="difficulty" value="3" />
                        </div>
                    </Stack>

                    <Button type="submit" variant="primary">
                        Start Training
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};
