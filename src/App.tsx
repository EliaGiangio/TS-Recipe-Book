import IngredientList from './IngredientList.tsx';
import RecipeList from './RecipeList.tsx';
import Button from './Button.tsx';



function App() {

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  const searchBtn = () => {
    location.reload();
  };

  const emoji = String.fromCodePoint(0x1F37D)


  return (
    <>

      <RecipeList />
      <IngredientList />
      <Button title={emoji + ' Start cooking! ' + emoji} onClick={searchBtn} styling='search-btn' />
    </>
  )
}

export default App