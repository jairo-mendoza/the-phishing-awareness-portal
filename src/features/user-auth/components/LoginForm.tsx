import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FormInput from "./FormInput";

import useForm from "../../../hooks/useForm";

import axios from "axios";

// The number of columns the form should take based on screen size
const mdFormCols = 7;
const lgFormCols = 5;

export const LoginForm: React.FC = () => {
    const { formData, handleFormChange } = useForm({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .post(`${process.env.REACT_APP_API_URI}/user/login-user`, formData)
            .then((response) => {
                //console.log(response);
                localStorage.setItem("token", response.data.token);
                navigate("/");
            })
            .catch((error) => {
                // TODO: Add proper error handling
                console.error("Login error");
            });
    };

    return (
        <Container>
            <h1>Login</h1>
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
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};
