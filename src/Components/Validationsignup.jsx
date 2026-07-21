import { useState } from "react";

function Validationsignup() {

    const [errors, setErrors] = useState({});

    const validate = (username, email, password, rePassword) => {

        let newErrors = {};

        if (username.trim() === "") {
            newErrors.username = "Username is required";
        }

        if (email.trim() === "") {
            newErrors.email = "Email is required";
        }

        if (password === "") {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must have at least 8 characters";
        }

        if (rePassword === "") {
            newErrors.rePassword = "Please repeat your password";
        } else if (rePassword !== password) {
            newErrors.rePassword = "Repeated password doesn't match";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    };

    return {
        errors,
        validate,
        clearError,
    };
}

export default Validationsignup;