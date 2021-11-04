export interface IRecipe {
  uuid: string
  title: string
  description: string
  images: {
    full: string
    medium: string,
    small: string
  }
  servings: number
  prepTime: number
  cookTime: number
  postDate: Date
  editDate: Date
  ingredients: IIngredient[]
  directions: IDirection[]
}

export interface IDirection {
  instructions: string
  optional: Boolean
}

export interface IIngredient {
  uuid: string
  amount: number
  measurement: string
  name: string
}

export interface ISpecial {
  uuid: string
  ingredientId: string
  type: string
  title: string
  geo: string
  text: string
}