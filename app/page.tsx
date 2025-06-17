import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";

export default async function Home() {
  // fetch the recipes from the recipes api route
  const res = await fetch("http://localhost:3000/api/recipes", {
    cache: "no-store", // disable caching to always get the latest data
  });

  // error handling
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  // parse the response as JSON
  const recipes = await res.json() as Recipe[];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">NextJS Practice Recipe App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full bg-green-100">
        {/* map the fetched recipes as cards */
          recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </main>
  );
}