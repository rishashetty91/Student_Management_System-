
export default function Button({ children, onClick, type = "button", className = "button" }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
