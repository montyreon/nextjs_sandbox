import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { Homemade_Apple } from 'next/font/google';

const homemade = Homemade_Apple({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

type RecipeDetailProps = {
    recipe: Recipe;
};

/**
 * Displays detailed information about a recipe, including its image, cooking time, ingredients, and instructions.
 * 
 * @param {RecipeDetailProps} param0 - The props containing the recipe to display.
 * @returns {JSX.Element} The rendered recipe detail component.
 */
const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => (
    <div
        style={{
            fontFamily: 'sans-serif',
            // random tilt for a handmade effect
            transform: `rotate(${((Math.random() < 0.5 ? -1 : 1) * (1 + Math.random())).toFixed(2)}deg)`,
            backgroundImage: 'url("/paper.webp")',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
        }}
        className="flex flex-col items-center mx-auto mb-20 max-w-[720px] rounded-xl py-12 px-8 shadow-lg"
    >
        <h1 className={`${homemade.className} text-[2rem] text-center font-bold text-slate-800`}>
            {recipe.name}
        </h1>
        <div className="w-full max-w-2xl p-6 font-serif">
            <Image
                src={recipe.image || "/recipes/placeholder.jpg"}
                alt={recipe.name}
                width={400}
                height={192}
                className="object-cover w-full h-64 mb-4 rounded-lg"
            />
            <p className="mb-4 text-gray-700">
                <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
            </p>
            <h2 className="mb-2 text-xl font-semibold">Ingredients</h2>
            <ul className="mb-4 list-disc list-inside">
                {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="mb-2 text-xl font-semibold">Instructions</h2>
            <ol className="list-decimal list-inside">
                {recipe.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                ))}
            </ol>
        </div>

    </div>
);

export default RecipeDetail;