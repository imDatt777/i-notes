import React from "react";

// Import styling
import "../styles/authform.scss";

const AuthForm = () => {
    const isNew = false;
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
                        <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            Don't have an account?
                            <span>
                                {" "}
                                <a href="/">Sign Up</a>
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
