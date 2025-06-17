import { Recipe } from "@/types/recipe";

export default async function RecipePage({ params,
}: {
    params: { id: string };
}) {
    const { id } = await params;

    // fetch the recipe from the recipes api route
    const res = await fetch(`http://localhost:3000/api/recipes?id=${id}`, {
        cache: "no-store", // disable caching to always get the latest data
    });

    // error handling
    if (!res.ok) {
        throw new Error("Failed to fetch recipe");
    }

    // parse the response as JSON
    const recipe = (await res.json()) as Recipe;

    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-8">
            <h1 className="text-[3rem] font-bold text-white drop-shadow-lg">
                {recipe.name}
            </h1>
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
                <img
                    src={'/recipes/placeholder.jpg'} // replace with recipe.image when available
                    alt={recipe.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-4">
                    <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
                </p>
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside mb-4">
                    {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside">
                    {recipe.instructions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="mt-8">
                <a
                    href="/"
                    className="text-blue-500 hover:underline"
                >
                    Back to Recipes
                </a>
            </div>

        </main>
    );
}