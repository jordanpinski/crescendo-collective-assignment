import { FC } from "react";
import { IIngredient, IRecipe, ISpecial, IDirection } from "lib/models/recipe";
import { RecipeIngredient } from "../RecipeIngredient";

export interface IRecipeDetail {
  recipe: IRecipe
  specials: ISpecial[]
  setEditingRecipe: (action: boolean) => void;
  setSelectedRecipe: (action: IRecipe | null) => void;
}

export const RecipeDetail: FC<IRecipeDetail> = ({ recipe, specials, setEditingRecipe, setSelectedRecipe }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="actions">
            <button
              className="button button--primary"
              onClick={() => {
                setSelectedRecipe(null)
                setEditingRecipe(false)
              }}
              title="Back">Back</button>
            {/* <button className="button button--primary" onClick={() => setEditingRecipe(true)} title="Edit Recipe">Edit Recipe</button> */}
          </div>

          <div className="recipe-detail">

            <div className="row">
              <div className="col-md-5">
                <div className="image">
                  <img src={recipe.images.medium} alt="" title="" />
                </div>
              </div>

              <div className="col-md-7">
                <h2 className="title">{recipe.title} <span>Last Edited: {recipe.editDate}</span></h2>
                <p className="description">{recipe.description}</p>
                <hr />
                <div className="details">
                  <h3>Details</h3>
                  <ul>
                    <li><strong>Prep Time:</strong> {recipe.prepTime} minutes</li>
                    <li><strong>Cook Time:</strong> {recipe.cookTime} minutes</li>
                    <li><strong>Total Time:</strong> {recipe.prepTime + recipe.cookTime} minutes</li>
                    <li><strong>Servings:</strong> {recipe.servings}</li>
                  </ul>
                </div>

                <hr />

                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient: IIngredient, index: number) => {
                      return (
                        <li key={index}>
                          <RecipeIngredient ingredient={ingredient} specials={specials} />
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <hr />

                <div className="directions">
                  <h3>Directions</h3>
                  <ol>
                    {recipe.directions.map((direction: IDirection, index: number) => {
                      return (
                        <li key={index}>
                          {direction.instructions} {direction.optional ? <i>(Optional)</i> : null}
                        </li>
                      )
                    })}
                  </ol>
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}