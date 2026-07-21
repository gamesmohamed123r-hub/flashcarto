import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validationsignup from "../Components/Validationsignup";

function Signform() {

    const { errors, validate, clearError } = Validationsignup();
    const navigate = useNavigate(); // Add this for navigation

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (validate(username, email, password, rePassword)) {
            // Success! Redirect to home page or wherever you want
            console.log("Form Submitted Successfully");
            
            // Option 1: Navigate to home page
            navigate("/");
            
            // Option 2: Or if you want to refresh the current page
            // window.location.reload();
            
            // Option 3: Or submit to a backend URL
            // You could also use form.submit() or fetch API here
        }
    };

    return (
        <div>
            <div className="form-box">

                <h1>Sign-up</h1>

                {submitted && Object.values(errors).length > 0 && (
                    <p id="error-message">
                        {Object.values(errors).join(". ")}
                    </p>
                )}

                <form id="form" onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className={submitted && errors.username ? "incorrect" : ""}>
                        <label htmlFor="username-input">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(255,255,255)">
                                <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Z"/>
                            </svg>
                        </label>
                        <input
                            type="text"
                            id="username-input"
                            name="username"
                            placeholder="UserName"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                clearError("username");
                            }}
                        />
                    </div>

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

                    {/* Repeat Password */}
                    <div className={submitted && errors.rePassword ? "incorrect" : ""}>
                        <label htmlFor="repassword-input">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(255,255,255)">
                                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm120-560h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/>
                            </svg>
                        </label>
                        <input
                            type="password"
                            id="repassword-input"
                            name="repassword"
                            placeholder="Repassword"
                            value={rePassword}
                            onChange={(e) => {
                                setRePassword(e.target.value);
                                clearError("rePassword");
                            }}
                        />
                    </div>

                    <button type="submit">
                        SignUp
                    </button>

                </form>

                <p>
                    Already have an account!{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Signform;