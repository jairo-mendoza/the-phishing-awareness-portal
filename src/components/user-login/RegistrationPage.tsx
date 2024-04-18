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

import { useState, FormEvent } from "react";
import useForm from "../../hooks/useForm";
import FormInput from "./FormInput";

// The number of columns the form should take based on screen size
const mdFormCols = 7;
const lgFormCols = 5;

function RegistrationPage() {
    const { formData, handleFormChange } = useForm({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleConfirmPasswordEntry = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== confirmPassword) return;

        try {
            await axios.post(
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
                                <FormInput
                                    type="text"
                                    name="firstName"
                                    label="First Name"
                                    handleFormChange={handleFormChange}
                                />
                            </Col>

                            <Col>
                                <FormInput
                                    type="text"
                                    name="lastName"
                                    label="Last Name"
                                    handleFormChange={handleFormChange}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Username Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <FormInput
                            type="text"
                            name="userName"
                            label="Username"
                            handleFormChange={handleFormChange}
                        />
                    </Col>
                </Row>

                {/* Email Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <FormInput
                            type="email"
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

                {/* Confirm Password Field */}
                <Row className="justify-content-md-center">
                    <Col md={mdFormCols} lg={lgFormCols}>
                        <FormInput
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            handleFormChange={handleConfirmPasswordEntry}
                        />
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
