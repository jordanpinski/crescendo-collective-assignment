import { FC, useState, useRef, SyntheticEvent } from "react";
import { IDirection, IIngredient } from "lib/models/recipe";
// import uuid from 'uuid-random';

export interface IRecipeForm {
  title: string
}

// TODO: Finish working on this when I have enough time.
export const RecipeForm: FC<IRecipeForm> = ({ title }) => {
  const [ingredients, setIngredients] = useState<IIngredient[] | []>([]);
  const [directions, setDirections] = useState<IDirection[] | []>([]);

  // Handle adding ingredients to the ingredients state object. This will be used when submitting the form.
  const IngredientInput = () => {
    return (
      <div className="ingredient-input">
        <div className="input-wrapper">
          <input type="number" id="servings" placeholder="servings" />
        </div>
        <button className="button button--secondary" title="Add Ingreident">Add Ingredient</button>
      </div>
    )
  }
  
  // Handle adding directions to the directions state object. This will be used when submitting the form.
  const DirectionInput = () => {
    const instructionsRef = useRef(null);
    const optionalRef = useRef(null);

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      console.dir(instructionsRef);

      // @ts-ignore
      const instructions = instructionsRef.current ? instructionsRef.current.value : "";

      // @ts-ignore
      const optional = optionalRef.current ? optionalRef.current.checked : false;

      setDirections([...directions, {
        instructions: instructions,
        optional: optional
      }])
    }

    return (
      <div className="direction-input">
        <div className="input-wrapper">
          <input type="text" id="instructions" placeholder="Instructions" ref={instructionsRef} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="optional">Optional</label>
          <input type="checkbox" name="optional" ref={optionalRef} />
        </div>
        <button
          onClick={handleSubmit}
          className="button button--secondary" title="Add Direction">Add Direction</button>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{title}</h2>
          <form className="recipe-form">

            <div className="input-wrapper">
              <input type="text" id="title" placeholder="Title" />
            </div>

            <div className="input-wrapper">
              <input type="text" id="description" placeholder="description" />
            </div>

            <div className="input-wrapper">
              <input type="number" id="servings" placeholder="servings" />
            </div>

            <div className="input-wrapper">
              <input type="number" id="prepTime" placeholder="prepTime" />
            </div>

            <div className="input-wrapper">
              <input type="number" id="cookTime" placeholder="cookTime" />
            </div>

            <hr />

            <h3>Ingredients</h3>
            <ul className="ingredients">
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
                )
              })}
            </ul>
            <IngredientInput />

            <hr />

            <h3>Directions</h3>
            <ul className="directions">
              {directions.map((direction, index) => {
                return (
                  <li key={index}>{direction.instructions} {direction.optional ? <span>(optional)</span> : null}</li>
                )
              })}
            </ul>
            <DirectionInput />

            <input className="button button--primary" type="submit" value="submit" />

          </form>
          <hr />
        </div>
      </div>
    </div>
  )
}