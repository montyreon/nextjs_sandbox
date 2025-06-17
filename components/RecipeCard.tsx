import Link from 'next/link';
import type { Recipe } from '../types/recipe';
import { Timer } from 'lucide-react';

// component that displays the recipe as a card preview
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link
            style={{
                display: 'inline-block',
                // randomized transform styles
                transform: `
                skew(${(Math.random() - 0.5) * 2}deg, ${(Math.random() - 0.5) * 2}deg)
                rotate(${(Math.random() - 0.5) * 5}deg)
                translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)
            `,
                transition: 'transform 0.2s',
            }}
            href={`/recipes/${recipe.id}`}
        >
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer">
                <img
                    className="w-full h-48 object-cover"
                    src="/recipes/placeholder.jpg" // replace soon
                    alt={recipe.name}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.name}</h2>
                    <div className="flex items-center text-gray-600 text-sm">
                        <Timer size={20}/>
                        <div className='w-1'/>
                        <div>{recipe.cookingTime} mins</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}