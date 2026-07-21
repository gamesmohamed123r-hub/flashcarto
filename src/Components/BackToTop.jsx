import { useState, useEffect } from "react";

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    
    useEffect(() => {

        const handleScroll = () => {

            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (
        <div>
            {showButton && (
                <button
                    className="btn-back-to-top"
                    onClick={scrollToTop}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
}

export default BackToTop;