import { Recipe } from "@/types/recipe";
import RecipeDetail from "@/components/RecipeDetail";
import Link from "next/link";


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
        <>
            {/* Sticky Back to Recipes button */}
            <div className="sticky top-0 z-50 flex justify-start w-full p-6">
                <Link
                    href="/"
                    className="px-4 py-2 text-black font-serif transition-colors duration-200 rounded shadow bg-white/80 hover:bg-white"
                >
                    Return
                </Link>
            </div>
            {/* Recipe Detail Component */}
            <RecipeDetail recipe={recipe} />
        </>
    );
}