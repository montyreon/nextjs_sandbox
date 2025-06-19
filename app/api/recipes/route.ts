import recipes from "../../../data/recipes.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const cookingTime = searchParams.get("cookingTime");

  let filteredRecipes = recipes;

  // Filter by name if provided
  if (name) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter by cooking time if provided
  if (cookingTime) {
    const maxTime = parseInt(cookingTime, 10);
    if (!isNaN(maxTime)) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.cookingTime <= maxTime
      );
    }
  }

  // Return results or error
  if (filteredRecipes.length > 0) {
    return Response.json(filteredRecipes);
  } else {
    return Response.json(
      { error: "No recipes matched your filters" },
      { status: 404 }
    );
  }
}
