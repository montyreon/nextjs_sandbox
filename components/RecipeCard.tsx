import Link from 'next/link';
import Image from 'next/image';
import type { Recipe } from '../types/recipe';
import { Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

// For better performance and readability, create the motion-wrapped component outside the main component.
const MotionLink = motion(Link);

/**
 * RecipeCard component displays a recipe preview card with image, name, and cooking time.
 * Animates into a random position on load and has a smooth hover effect.
 * @param {Object} props
 * @param {Recipe} props.recipe - The recipe data to display.
 * @returns {JSX.Element} The rendered recipe card component.
 */
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    // useMemo ensures that random transform values are generated only once per component instance.
    // This prevents the card from jumping to a new position on every re-render.
    const randomTransforms = useMemo(() => {
        const rotate = (Math.random() - 0.5) * 8; // Reduced rotation for a subtler effect
        const x = (Math.random() - 0.5) * 15;
        const y = (Math.random() - 0.5) * 15;
        return { rotate, x, y };
    }, []);

    return (
        <MotionLink
            href={`/recipes/${recipe.id}`}
            // Initial state (before animation starts)
            initial={{ opacity: 0, scale: 0.9, ...randomTransforms }}
            // Animate to the final, stable random position
            animate={{ opacity: 1, scale: 1, ...randomTransforms }}
            // Animate on hover
            whileHover={{ scale: 1.05, y: randomTransforms.y - 10, rotate: randomTransforms.rotate - 1, zIndex: 10 }}
            // Configure the physics of the animation
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative inline-block" // Use relative for zIndex on hover to work
        >
            <div className="max-w-sm overflow-hidden transition-all duration-200 shadow-lg rounded-xl hover:shadow-yellow-200 hover:bg-white bg-white/80 hover:shadow-2xl hover:cursor-pointer">
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
                        <Timer size={20} />
                        <div className='w-1' />
                        {/* conditional computation to indicate hrs or mins or both */}
                        <div className='!font-serif'>
                            {recipe.cookingTime >= 60
                                ? `${Math.floor(recipe.cookingTime / 60)} hour${Math.floor(recipe.cookingTime / 60) > 1 ? 's' : ''}${recipe.cookingTime % 60 > 0 ? ` ${recipe.cookingTime % 60} min${recipe.cookingTime % 60 > 1 ? 's' : ''}` : ''}`
                                : `${recipe.cookingTime} min${recipe.cookingTime > 1 ? 's' : ''}`}
                        </div>
                    </div>
                </div>
            </div>
        </MotionLink>
    )
}