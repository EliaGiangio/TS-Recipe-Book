export interface Food {
    id: string;
    name: string;
    type: string;
    selected: boolean;
};
const foods: Food[] = [
    { id: crypto.randomUUID(), name: 'pasta', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'egg', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'bacon', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'tomato', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'banana', type: 'fruit', selected: false },
    { id: crypto.randomUUID(), name: 'apple', type: 'fruit', selected: false },
    { id: crypto.randomUUID(), name: 'pecorino', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'chicken', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'lemon', type: 'fruit', selected: false },
    { id: crypto.randomUUID(), name: 'flour', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'mango', type: 'fruit', selected: false },
    { id: crypto.randomUUID(), name: 'rice', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'tomato', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'beef', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'onion', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'steak', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'tomato paste', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'zucchini', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'potatoes', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'tomato sauce', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'strawberries', type: 'fruit', selected: false },
    { id: crypto.randomUUID(), name: 'beans', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'carrot', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'peas', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'onion', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'tuna', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'corn', type: 'veg', selected: false },
    { id: crypto.randomUUID(), name: 'inkfish', type: 'meat', selected: false },
    { id: crypto.randomUUID(), name: 'lentils', type: 'other', selected: false },
    { id: crypto.randomUUID(), name: 'parmiggiano', type: 'other', selected: false },

];

export default foods;