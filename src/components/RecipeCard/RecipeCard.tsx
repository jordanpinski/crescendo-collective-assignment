import { FC } from "react";
import { IRecipe } from "lib/models/recipe";

export interface IRecipeCard {
  recipe: IRecipe
  setSelectedRecipe: (action: IRecipe | null) => void;
}

export const RecipeCard: FC<IRecipeCard> = ({ recipe, setSelectedRecipe }) => {
  return (
    <div className="recipe-card" onClick={() => setSelectedRecipe(recipe)} title={recipe.title}>
      {/* <a href={`/recipe/${getRecipePermalink(recipe.title)}`} title={recipe.title}> */}
        <div className="image">
          <img src={recipe.images.medium} alt="" title="" width="200" height="150" />
          <div className="actions">
            <button className="button button--primary" title="View">View</button>
          </div>
          <div className="details">
            <span className="cook-time">Cook Time: {recipe.cookTime}</span>
            <span className="prep-time">Prep Time: {recipe.prepTime}</span>
          </div>
        </div>
        <h3 className="title">{recipe.title}</h3>
        <p className="description">{recipe.description}</p>
      {/* </a> */}
    </div>
  )
}

export function getRecipePermalink(title: string): string {
  return title.replaceAll(" ", "-").toLowerCase();
}