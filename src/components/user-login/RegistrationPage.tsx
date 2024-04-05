import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Based on 12 Cols for the screen
// <Col md={7} lg={5} ...
//      means that content inside the column will only take up 7 columns for medium sized
//      screens and so on
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// react-bootstrap forms: https://react-bootstrap.netlify.app/docs/forms/layout/#forms

import axios from "axios";

import { useState, ChangeEvent, FormEvent } from "react";

// The number of columns the form should take based on screen size
const mdFormCols = 7;
const lgFormCols = 5;

interface FormData {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

function RegistrationPage() {
    //const [password, setPassword] = useState<string>("");
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleConfirmPasswordEntry = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== confirmPassword) return;

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URI}/user/register-user`,
                formData
            );
        } catch (error) {
            console.error("Registration error");
        }
    };

    return (
        <Container>
            <h1>Register</h1>

            <Form onSubmit={handleSubmit}>
                {/* First and Last Name Fields */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="firstNameField"
                                >
                                    <Form.FloatingLabel
                                        controlId="firstNameFieldLabel"
                                        label="First name"
                                        className="mb-3"
                                    >
                                        {/* name prop matches the textbox to the form data */}
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            name="firstName"
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </Form.FloatingLabel>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="lastNameField"
                                >
                                    <Form.FloatingLabel
                                        controlId="latNameFieldLabel"
                                        label="Last name"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            name="lastName"
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </Form.FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Username Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <Form.Group className="mb-3" controlId="userNameField">
                            <Form.FloatingLabel
                                controlId="userNameFieldLabel"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Phisher123"
                                    name="userName"
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Email Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <Form.Group className="mb-3" controlId="emailField">
                            <Form.FloatingLabel
                                controlId="emailFieldLabel"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Password Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <Form.Group className="mb-3" controlId="passwordField">
                            <Form.FloatingLabel
                                controlId="passwordFieldLabel"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Confirm Password Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <Form.Group
                            className="mb-3"
                            controlId="confirmPasswordField"
                        >
                            <Form.FloatingLabel
                                controlId="confirmPasswordFieldLabel"
                                label="Confirm Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleConfirmPasswordEntry}
                                />
                            </Form.FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Submit Form Button */}
                <Button
                    type="submit"
                    disabled={
                        formData.password !== confirmPassword ||
                        confirmPassword === ""
                    }
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default RegistrationPage;
