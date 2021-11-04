import { FC } from "react";
import { RecipeCard } from "../RecipeCard";
import { IRecipe } from "lib/models/recipe";

export interface IRecipeList {
  recipes: IRecipe[] | [];
  setAddingRecipe: (action: boolean) => void;
  setSelectedRecipe: (action: IRecipe | null) => void;
}

export const RecipeList: FC<IRecipeList> = ({ recipes, setAddingRecipe, setSelectedRecipe }) => {
  return (
    <div className="recipe-list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Recipes {/* <button className="button button--primary" onClick={() => setAddingRecipe(true)} title="Add Recipe">Add Recipe</button> */}</h2>
          </div>
          {recipes.map((recipe: IRecipe, index: number) => {
            return (
              <div className="col-xs-6 col-sm-4 col-lg-3" key={index} onClick={() => setAddingRecipe(false)}>
                <RecipeCard recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}