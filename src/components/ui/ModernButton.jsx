// ModernButton.jsx
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./ModernButton.css";

const ModernButton = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    icon = null,
    iconPosition = "left",
    onClick,
    className = "",
    ...props
}) => {
    const [isRippling, setIsRippling] = useState(false);
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const buttonRef = useRef(null);

    // Handle ripple effect
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 600);
        }
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    const handleClick = (e) => {
        if (disabled || loading) return;

        // Calculate ripple position
        const rect = buttonRef.current.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

        if (onClick) onClick(e);
    };

    return (
        <button
            ref={buttonRef}
            className={`modern-btn ${variant} ${size} ${disabled ? "disabled" : ""} ${loading ? "loading" : ""} ${className}`}
            disabled={disabled || loading}
            onClick={handleClick}
            {...props}
        >
            {isRippling && (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            )}

            {loading && <span className="loader"></span>}

            <span className="btn-content">
                {icon && iconPosition === "left" && (
                    <span className="icon left">{icon}</span>
                )}
                <span className="text">{children}</span>
                {icon && iconPosition === "right" && (
                    <span className="icon right">{icon}</span>
                )}
            </span>
        </button>
    );
};

ModernButton.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
    ]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default ModernButton;
