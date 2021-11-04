import { FC } from "react";
import { IIngredient, ISpecial } from "lib/models/recipe";

export interface IRecipeIngredient {
  ingredient: IIngredient
  specials: ISpecial[]
}

export const RecipeIngredient: FC<IRecipeIngredient> = ({ ingredient, specials }) => {
  const special = specials.filter((special) => {
    return special.ingredientId === ingredient.uuid;
  })
  
  return (
    <div className="recipe-ingredient">
      <span>{ingredient.amount} </span>
      <span>{ingredient.measurement} </span>
      <span>{ingredient.name}</span>
      {special.length > 0 ? (
        <div className="special">
          <span className="type">{special[0].type}</span>
          <ul>
            <li>{special[0].title}</li>
            <li>{special[0].text}</li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}