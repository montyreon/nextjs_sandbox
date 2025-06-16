import recipes from "../../../data/recipes.json";

export async function GET(request: Request) {
  // destructure the URL and only get the search parameters
  const { searchParams } = new URL(request.url);

  // apply filters only if there are parameters
  if (searchParams.size > 0) {
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    // filter by id if it exists
    if (id) {
      const recipe = recipes.find((recipe) => recipe.id === id);
      if (recipe) {
        return Response.json(recipe);
      } else {
        return Response.json({ error: "Recipe not found" }, { status: 404 });
      }
    }

    // filter by name if it exists
    if (name) {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );
      if (filteredRecipes.length > 0) {
        return Response.json(filteredRecipes);
      } else {
        return Response.json(
          { error: "No recipes found with that name" },
          { status: 404 }
        );
      }
    }
  }

  // if no filters, return all recipes
  return Response.json(recipes);
}
