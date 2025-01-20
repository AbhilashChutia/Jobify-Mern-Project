import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components/";

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type="text" name="name" defaultValue="John" />
                <FormRow
                    type="text"
                    name="lastName"
                    labelText="last name"
                    defaultValue="John"
                />
                <FormRow type="text" name="location" defaultValue="Earth" />
                <FormRow
                    type="text"
                    name="email"
                    defaultValue="John@gmail.com"
                />
                <FormRow type="text" name="password" defaultValue="secret123" />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
