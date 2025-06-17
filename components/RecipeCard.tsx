import type { Recipe } from '../types/recipe';

// component that displays the recipe as a card preview
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <img
            className="w-full h-48 object-cover"
            src={recipe.image}
            alt={recipe.name}
            />
            <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.name}</h2>
            <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <span>{recipe.cookingTime} mins</span>
            </div>
            </div>
        </div>
    )
}