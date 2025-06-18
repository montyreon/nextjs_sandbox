import RecipeCard from "@/components/RecipeCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Recipe } from "@/types/recipe";
import { cn } from "@/lib/utils";
import BackToTopButton from "@/components/ui/BackToTopButton";


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
    <main className="relative flex flex-col items-center min-h-screen">
      <AuroraBackground>
        <h1
          className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg"
        >
          Ma, Anong Ulam?
        </h1>
      </AuroraBackground>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 w-max max-w-[95%] !py-0 p-8 lg:pt-0 md:p-16 lg:p-24">
        {/* map the fetched recipes as cards */
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
      {/* Back to Top Button */}
      <BackToTopButton />
    </main>
  );
}