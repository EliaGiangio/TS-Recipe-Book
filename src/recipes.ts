interface Recipe {
    id: string;
    name: string;
    ingredients: string[];
    explanation: string[];
};

const recipes: Recipe[] = [
    { id: crypto.randomUUID(), name: 'Carbonara', ingredients: ['pasta', 'egg', 'bacon', 'pecorino cheese'], explanation: ['Mix grated cheese and eggs till it gets a creamy', 'cut the bacon(guanciale) in blocks and stir-fry till brown', 'switch off the stove, mix everything together and add some of the water you cooked the pasta in'] },
    { id: crypto.randomUUID(), name: 'Lemon Chicken', ingredients: ['chicken', 'lemon', 'egg', 'flour', 'rice'], explanation: ['soak the chicken filets in the eggs you scrambled', 'cover each piece in flour and fry', 'when both sides are cooked, fill a glass of half lemon juice and half water and throw the mix in the pan. Then cover', 'when the chicken absorbed at least half of the liquid you can turn off and let it rest for a few minutes before serving with steamed rice'] },
    { id: crypto.randomUUID(), name: 'Fruit Mix', ingredients: ['banana', 'apple', 'mango'], explanation: ['cut the fruit you have', 'add lemon juice and if you prefer some sugar', 'let it rest for at least 30min'] },
    { id: crypto.randomUUID(), name: 'Ragu (fast)', ingredients: ['pasta', 'tomato sauce', 'beef', 'onion'], explanation: ['stir-fry onions (garlic if you have), and when the onions are done add the beef', 'when the beef is also ready add tomato sauce to it and if you want add a little extra water if the mix looks dry', 'let it cook till the extra liquid dries out and the sauce becomes thick (about 20min)', 'add the cooked pasta with some water it was boiled in'] },
    { id: crypto.randomUUID(), name: 'Salad', ingredients: ['salad', 'onion', 'tomato'], explanation: ['cut all the ingredients', 'add olive oil, salt and vinegar', 'enjoooooy'] },
    { id: crypto.randomUUID(), name: 'Lentil Soup', ingredients: ['lentils', 'onion', 'carrots', 'parmigiano', 'peas'], explanation: ['Boil veggies for about 1hr', 'add lentils and cook for about 30min/1hr (based on the lentils)', 'Add parmigiano at the end'] },
    { id: crypto.randomUUID(), name: 'Rice & Tuna', ingredients: ['tuna', 'tomato', 'corn'], explanation: ['Cut tomatoes and add corn and plenty of olive oil', 'In a bowl put the boiled rice, tuna and the tomato mix you made earlier', 'preferably eat it cold', 'Fresh Basil and oregano are a great addition'] },
    { id: crypto.randomUUID(), name: 'Pasta al tonno', ingredients: ['tuna', 'onion', 'pasta'], explanation: ['Stir fry onions in a shitton of olive oil', 'When the pasta is almost cooked add the tuna to the oil and onion and let it cook very low heat for 2/3 min', 'Add pasta to the mix and let go into it also a bit of the water you boiled the pasta in'] },
    { id: crypto.randomUUID(), name: 'Strawberry salad', ingredients: ['strawberry', 'lemon'], explanation: ['Cut strawberries and add plenty of lemon juice and sugar', 'Eat after at least 30min'] },
    { id: crypto.randomUUID(), name: 'Seppie e piselli', ingredients: ['inkfish', 'peas', 'tomato sauce'], explanation: ['stir-fry onions (garlic if you have), and when the onions are done add the inkfish and few minutes later peas', 'when the inkfish is ready add tomato sauce to it and if you want add a little extra water if the mix looks dry', 'let it cook till the extra liquid dries out and the sauce becomes thick (about 20min)', 'add the cooked pasta with some water it was boiled in'] },
    { id: crypto.randomUUID(), name: 'Big protein Stew', ingredients: ['steak', 'potatoes', 'peas', 'tomato paste', 'carrots', 'zucchini'], explanation: ['Cut the steak in medium cubes and stir-fry in a pan with olive oil, till brown on each side', 'Boil all the veggies and when the steak is ready throw it into the pot with some tomato paste', 'Cook for at least 2hrs'] }

];

export default recipes;