// Components/Validationlogin.jsx
import { useState } from "react";

function Validationlogin() {

    const [errors, setErrors] = useState({});

    const validate = (email, password) => {
        let newErrors = {};

        if (email.trim() === "") {
            newErrors.email = "Email is required";
        }

        if (password === "") {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const clearError = (field) => {
        setErrors((prev) => {
            const updated = { ...prev };
            delete updated[field];
            return updated;
        });
    };

    return {
        errors,
        validate,
        clearError,
    };
}

export default Validationlogin;