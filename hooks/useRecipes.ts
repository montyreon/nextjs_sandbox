import { useEffect, useState } from "react";
import type { Recipe } from "@/types/recipe";

type RecipeQuery = {
  id?: string;
  name?: string;
  cookingTime?: string;
  sortOrder?: string;
};

export function useRecipes(filters: RecipeQuery = {}) {
  const [recipes, setRecipes] = useState<Recipe[] | Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (filters.id) queryParams.append("id", filters.id);
      if (filters.name) queryParams.append("name", filters.name);
      if (filters.cookingTime) queryParams.append("cookingTime", filters.cookingTime);
      if (filters.sortOrder) queryParams.append("sortOrder", filters.sortOrder);

      try {
        const res = await fetch(`/api/recipes?${queryParams.toString()}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Unknown error");
        }

        const data = await res.json();
        setRecipes(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch recipes");
        setRecipes(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [filters]);

  return { recipes: recipes || [], loading, error };
}