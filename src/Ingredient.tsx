import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IngredientProps {
    name: string;
    type: string;
    onClick: () => void;
}

const Ingredient = ({ name, type, onClick }: IngredientProps) => {
    const [selected, setSelected] = useState(false);

    let buttonStyle: string;
    if (type === 'meat') {
        buttonStyle = selected ? 'btn btn-danger' : 'btn btn-outline-danger';
    } else if (type === 'veg') {
        buttonStyle = selected ? 'btn btn-success' : 'btn btn-outline-success';
    } else if (type === 'fruit') {
        buttonStyle = selected ? 'btn btn-warning' : 'btn btn-outline-warning';
    } else {
        buttonStyle = selected ? 'btn btn-secondary' : 'btn btn-outline-secondary';
    }

    const handleClick = () => {
        setSelected(!selected);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type="button" className={buttonStyle} onClick={handleClick}>
            {name}
        </button>
    );
};

export default Ingredient;