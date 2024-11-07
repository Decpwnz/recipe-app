export interface Ingredient {
  id: string
  name: string
  amount: number
  unit: string
}

export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  imageUrl: string
  cookingTime: number
  servings: number
  prepTime?: number
  totalTime?: number
  category?: string
  difficulty?: 'easy' | 'medium' | 'hard'
}
