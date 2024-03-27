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

import { useState } from "react";

// The number of columns the form should take based on screen size
const mdFormCols = 7;
const lgFormCols = 5;

function RegistrationPage() {
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handlePasswordEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const handleConfirmPasswordEntry = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
        console.log(confirmPassword);

        if (password === confirmPassword) {
            setIsFormValid(true);
        }
    };

    return (
        <Container>
            <h1>Register</h1>

            <Form>
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
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
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
                                        />
                                    </Form.FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
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
                                    onChange={handlePasswordEntry}
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
                        password !== confirmPassword || confirmPassword === ""
                    }
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default RegistrationPage;
