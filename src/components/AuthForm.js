import React, { useState } from "react";

// Import styling
import "../styles/authform.scss";

const AuthForm = (props) => {
    const { isNew = false } = props;

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const LoginHandler = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });

        const json = await response.json();
        console.log(json);
    };

    const onChange = (event) => {
        setCredentials({
            ...credentials,
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
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                ) : (
                    <div className="login-form">
                        <form onSubmit={LoginHandler}>
                            <input
                                type="email"
                                value={credentials.email}
                                onChange={onChange}
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={onChange}
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
