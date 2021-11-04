import { useState, useEffect } from "react";
import { IRecipe, ISpecial } from "lib/models/recipe";
import { RecipeList } from "./components/RecipeList";
import { RecipeDetail } from "./components/RecipeDetail";
import { RecipeForm } from "./components/RecipeForm";
import "./global.css";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState<IRecipe[] | []>([]);
  const [specials, setSpecials] = useState<ISpecial[] | []>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);

  const [addingRecipe, setAddingRecipe] = useState<boolean>(false);
  const [editingRecipe, setEditingRecipe] = useState<boolean>(false);

  useEffect(() => {

    // Fetch recipes
    axios({
      method: "GET",
      url: "http://localhost:3001/recipes"
    }).then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    })

    // Fetch specials
    axios({
      method: "GET",
      url: "http://localhost:3001/specials"
    }).then((response) => {
      console.log(response.data);
      setSpecials(response.data);
    })
  }, [])

  return (
    <div className="app">
      {addingRecipe ? <RecipeForm title="Add Recipe" /> : null}
      {editingRecipe ? <RecipeForm title="Edit Recipe" /> : null}

      {selectedRecipe ?
        <RecipeDetail
          specials={specials}
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          setEditingRecipe={setEditingRecipe}
        /> :
        <RecipeList
          recipes={recipes}
          setSelectedRecipe={setSelectedRecipe}
          setAddingRecipe={setAddingRecipe}
        />}
    </div>
  );
}

export default App;
