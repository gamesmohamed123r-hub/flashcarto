// Login/Loginform.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validationlogin from "../Components/Validationlogin";
import Navbar from "../Home/Navbar";
import ScrollToHash from "../Components/ScrollToHash";
import BackToTop from "../Components/BackToTop";

function Loginform() {

    const { errors, validate, clearError } = Validationlogin();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (validate(email, password)) {
            console.log("Login Successful");
            navigate("/");
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="form-box">

                <h1>Login</h1>

                {submitted && Object.values(errors).length > 0 && (
                    <p id="error-message">
                        {Object.values(errors).join(". ")}
                    </p>
                )}

                <form id="form" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className={submitted && errors.email ? "incorrect" : ""}>
                        <label htmlFor="useremail-input">
                            <span>@</span>
                        </label>
                        <input
                            type="email"
                            id="useremail-input"
                            name="useremail"
                            placeholder="UserEmail"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                clearError("email");
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div className={submitted && errors.password ? "incorrect" : ""}>
                        <label htmlFor="password-input">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(255,255,255)">
                                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm120-560h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/>
                            </svg>
                        </label>
                        <input
                            type="password"
                            id="password-input"
                            name="password"
                            placeholder="YourPassword"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                clearError("password");
                            }}
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </p>

            </div>
           <ScrollToHash/>
           <BackToTop/>
        </div>
    );
}

export default Loginform;