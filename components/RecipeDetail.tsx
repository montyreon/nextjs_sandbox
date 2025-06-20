import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { Homemade_Apple } from 'next/font/google';
import { JSX } from "react";
import { Timer } from "lucide-react";
import { formatCookingTime } from "@/lib/utils";
import { div } from "framer-motion/client";

const homemade = Homemade_Apple({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

type RecipeDetailProps = {
    recipe: Recipe;
};


// styles for the main container, externalized for better readability
const divStyles = {
    fontFamily: 'sans-serif',
    // random tilt for a handmade effect
    transform: `rotate(${((Math.random() < 0.5 ? -1 : 1) * (1 + Math.random())).toFixed(2)}deg)`,
    backgroundImage: 'url("/paper.webp")',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center'
}

/**
 * Displays detailed information about a recipe, including its image, cooking time, ingredients, and instructions.
 * 
 * @param {RecipeDetailProps} param0 - The props containing the recipe to display.
 * @returns {JSX.Element} The rendered recipe detail component.
 */
const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }: RecipeDetailProps): JSX.Element => (
    <div
        style={divStyles}
        className="flex flex-col items-center mx-auto mb-20 max-w-[80%] lg:max-w-[600px] w-max rounded-xl py-8 px-2 lg:py-12 lg:px-8 shadow-lg text-gray-700"
    >

        {/* recipe title with custom font and bold styling */}
        <h1 className={`${homemade.className} text-[2rem] w-full font-bold px-10`}>
            {recipe.name}
        </h1>

        <div className="w-full max-w-2xl p-6 font-serif">

            {/* recipe image with fallback and styling */}
            <Image
                src={recipe.image || "/recipes/placeholder.jpg"}
                alt={recipe.name}
                width={800}
                height={600}
                className="mb-4 border-2 rounded-lg shadow-sm border-stone-400"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '400px' }}
            />


            {/* cooking time section with icon */}
            <div className="flex items-center mb-4 text-gray-700">
                <strong className="mr-2">Cooking Time:</strong>
                <Timer size={20} />
                <div className='w-1' />
                <span className='!font-serif'>
                    {formatCookingTime(recipe.cookingTime)}
                </span>
            </div>


            {/* ingredients list */}
            <h2 className="mb-2 text-xl font-semibold">Ingredients</h2>
            <ul className="pl-10 mb-4 list-disc">
                {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                ))}
            </ul>


            {/* instructions section with steps */}
            <div className="p-4 border-2 shadow-md lg:p-8 border-stone-400">
                <h2 className="mb-2 text-xl font-semibold">Instructions</h2>
                <ol className="pl-6 list-decimal list-inside">
                    {recipe.instructions.map((step, idx) => (
                        <li key={idx} className="mb-2">{step}</li>
                    ))}
                </ol>
            </div>
        </div>

    </div>
);

export default RecipeDetail;