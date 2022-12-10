import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import styling
import "../styles/authform.scss";

const AuthForm = (props) => {
    const { isNew = false } = props;
    const navigate = useNavigate();

    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: "",
    });
    const [signupCredentials, setSignupCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    /* Logic for user login */
    const LoginHandler = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: loginCredentials.email,
                password: loginCredentials.password,
            }),
        });

        const json = await response.json();
        console.log(json);
    };

    const onLoginChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value,
        });
    };

    /* Logic for user Sign Up */
    const SignupHandler = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: signupCredentials.name,
                email: signupCredentials.email,
                password: signupCredentials.password,
            }),
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Saving auth token and redirect to home
            localStorage.setItem("token", json.authToken);
            navigate("/home");
        } else {
            alert("Something went wrong");
        }
    };

    const onSignupChange = (event) => {
        setSignupCredentials({
            ...signupCredentials,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="form-container">
            <div className="background-container">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div>
            <div className="form-wrapper">
                {isNew ? (
                    <div className="signup-form">
                        <form onSubmit={SignupHandler}>
                            <input
                                type="text"
                                placeholder="Username"
                                name="name"
                                onChange={onSignupChange}
                                value={signupCredentials.name}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={onSignupChange}
                                value={signupCredentials.email}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={onSignupChange}
                                value={signupCredentials.password}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="cpassword"
                                onChange={onSignupChange}
                                value={signupCredentials.cpassword}
                            />
                            <button type="submit">Sign Up</button>
                        </form>
                        <p>
                            Already a user?
                            <span>
                                {" "}
                                <a href="/">Login</a>
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="login-form">
                        <form onSubmit={LoginHandler}>
                            <input
                                type="email"
                                value={loginCredentials.email}
                                onChange={onLoginChange}
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                value={loginCredentials.password}
                                onChange={onLoginChange}
                                name="password"
                                placeholder="Password"
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            Don't have an account?
                            <span>
                                {" "}
                                <a href="/signup">Sign Up</a>
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
