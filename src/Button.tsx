interface ButtonProps {
    title: string;
    onClick: () => void;
    styling: string;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, styling }) => {
    const classStyles: string = styling + ' btn btn-primary';
    return (
        <button className={classStyles} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;