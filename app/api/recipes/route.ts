import recipes from "../../../data/recipes.json";
import { Recipe } from "@/types/recipe";

export async function GET(request: Request) {
  // parse the provided URL parameters for filtering and sorting
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const cookingTime = searchParams.get("cookingTime");
  const sortOrder = searchParams.get("sortOrder");

  let filteredRecipes: Recipe[] = recipes;

  // simulated delay 
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // first evaluate if the request is for a specific recipe by ID
  // if so, we will return that recipe directly
  // otherwise, we will filter the recipes based on the provided parameters
  // filter by ID (exact match)
  if (id) {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      return Response.json(recipe);
    } else {
      return Response.json({ error: "Recipe not found" }, { status: 404 });
    }
  }

  // if no ID is provided, we will filter the recipes based on the other parameters
  // filter by name (partial match)
  if (name) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // filter by cooking time (less than or equal)
  if (cookingTime) {
    const maxTime = parseInt(cookingTime);
    if (!isNaN(maxTime)) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.cookingTime <= maxTime
      );
    }
  }

  // apply sorting
  if (sortOrder) {
    switch (sortOrder) {
      case "az":
        filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        filteredRecipes.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "cookLowHigh":
        filteredRecipes.sort((a, b) => a.cookingTime - b.cookingTime);
        break;
      case "cookHighLow":
        filteredRecipes.sort((a, b) => b.cookingTime - a.cookingTime);
        break;
    }
  }

  if (filteredRecipes.length === 0) {
    return Response.json({ error: "No recipes found" }, { status: 404 });
  }

  return Response.json(filteredRecipes);
}