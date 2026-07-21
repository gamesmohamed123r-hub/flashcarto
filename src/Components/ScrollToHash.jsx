import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(
                location.hash.substring(1)
            );

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }, [location]);

    return null;
}

export default ScrollToHash;