import Link from 'next/link';
import Image from 'next/image';
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
            <div className="max-w-sm overflow-hidden transition-all duration-200 shadow-lg rounded-xl hover:shadow-yellow-200 hover:bg-white bg-white/80 hover:shadow-2xl hover:-translate-y-1 hover:cursor-pointer">
                <Image
                    className="object-cover w-full h-48"
                    src={recipe.image || '/recipes/placeholder.jpg'}
                    alt={recipe.name}
                    width={400}
                    height={192}
                    priority
                />
                <div className="p-4">
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">{recipe.name}</h2>
                    <div className="flex items-center text-sm text-gray-600">
                        <Timer size={20}/>
                        <div className='w-1'/>
                        <div className='!font-serif'>{recipe.cookingTime} mins</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}