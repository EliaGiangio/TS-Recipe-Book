import Ingredient from './Ingredient.tsx';
import { useState, useEffect } from 'react';
import foods, { Food } from './foods.ts';
import 'bootstrap/dist/css/bootstrap.css';
import emoji from './emojimaker.ts';



const IngredientList = () => {
    const [ingredients, setIngredients] = useState(foods);
    const [selection, setSelection] = useState<string[]>([]);

    const selectIngredient = (id: string) => {
        const updatedIngredients = ingredients.map((food) => {
            if (food.id === id) {
                return { ...food, selected: !food.selected };
            } else {
                return food;
            }
        });
        setIngredients(updatedIngredients);

        const newSelection = updatedIngredients.filter(food => food.selected);
        const selectedNames = newSelection.map(food => food.name);
        setSelection(selectedNames);
    };

    useEffect(() => {
        localStorage.setItem("selection", JSON.stringify(selection));
    }, [selection]);

    const groupedIngredients: { [key: string]: Food[] } = ingredients.reduce((acc, ingredient) => {
        acc[ingredient.type] = [...(acc[ingredient.type] || []), ingredient];
        return acc;
    }, {} as { [key: string]: Food[] });

    return (
        <div className='container'>
            <h1>ELIA'S KITCHEN</h1>
            <div className='sub-container'>
                {Object.entries(groupedIngredients).map(([type, ingredients]) => (
                    <div className='column' key={type}>
                        <h2 className='column-title'>{emoji(type)}</h2>
                        <div className='button-container'>
                            {ingredients.map((food) => (
                                <Ingredient
                                    key={food.id}
                                    name={food.name}
                                    type={food.type}
                                    onClick={() => selectIngredient(food.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IngredientList;