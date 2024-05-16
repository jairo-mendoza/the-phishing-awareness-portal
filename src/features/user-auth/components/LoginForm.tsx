import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import FormInput from './FormInput';

import useForm from '@/hooks/useForm';
import { useLogin } from '@/lib/auth';
import { Link } from 'react-router-dom';

// The number of columns the form should take based on screen size
const mdFormCols = 7;
const lgFormCols = 5;

type LoginFormProps = {
    onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const { formData, handleFormChange } = useForm({
        email: '',
        password: '',
    });

    const login = useLogin();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login.mutate(
            {
                email: formData.email,
                password: formData.password,
            },
            {
                onSuccess: () => {
                    // mutate is asynchronous, so we need to use onSuccess to handle the success case
                    onSuccess();
                },
            }
        );
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Email Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <FormInput
                            type="text"
                            name="email"
                            label="Email"
                            handleFormChange={handleFormChange}
                        />
                    </Col>
                </Row>

                {/* Password Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <FormInput
                            type="password"
                            name="password"
                            label="Password"
                            handleFormChange={handleFormChange}
                        />
                    </Col>
                </Row>

                {/* Submit Form Button */}
                <Button disabled={login.isPending} type="submit">
                    Login
                </Button>
                <br />
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    Don't have an account? Register here
                </Link>
            </Form>
        </Container>
    );
};
