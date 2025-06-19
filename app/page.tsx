"use client";

import RecipeCard from "@/components/RecipeCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Recipe } from "@/types/recipe";
import BackToTopButton from "@/components/ui/BackToTopButton";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [fetchedRecipes, setFetchedRecipes] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<{
    name?: string;
    cookingTime?: string;
    sortOrder?: string;
  }>({});

  // Fetch on initial load and when filters are applied
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (filters.name) queryParams.append("name", filters.name);
    if (filters.cookingTime) queryParams.append("cookingTime", filters.cookingTime);

    const fetchRecipes = async () => {
      try {
        const res = await fetch(`/api/recipes?${queryParams.toString()}`, {
          cache: "no-store",
        });

        const data = await res.json();
        let recipes = res.ok ? data : [];

        // Apply sort if defined
        switch (filters.sortOrder) {
          case "az":
            recipes.sort((a:Recipe, b:Recipe) => a.name.localeCompare(b.name));
            break;
          case "za":
            recipes.sort((a:Recipe, b:Recipe) => b.name.localeCompare(a.name));
            break;
          case "cookLowHigh":
            recipes.sort((a:Recipe, b:Recipe) => a.cookingTime - b.cookingTime);
            break;
          case "cookHighLow":
            recipes.sort((a:Recipe, b:Recipe) => b.cookingTime - a.cookingTime);
            break;
        }

        setFetchedRecipes(recipes);
      } catch (err) {
        console.error("Fetch failed:", err);
        setFetchedRecipes([]);
      }
    };

    fetchRecipes();
  }, [filters]);

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("searchName")?.toString().trim();
    const cookingTime = formData.get("cookingTime")?.toString().trim();
    const sortOrder = formData.get("sortOrder")?.toString().trim();

    setFilters({
      name: name || undefined,
      cookingTime: cookingTime || undefined,
      sortOrder: sortOrder || undefined,
    });
  };

  const clearFilters = () => {
    setFilters({});
    (document.getElementById("recipeFilterForm") as HTMLFormElement)?.reset();
  };

  return (
    <main className="relative flex flex-col items-center min-h-screen">
      <AuroraBackground>
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          Ma, Anong Ulam?
        </h1>
      </AuroraBackground>

      {/* Filtering Form */}
      <form
        id="recipeFilterForm"
        className="flex flex-col items-center w-full max-w-xl px-4 font-serif text-black"
        onSubmit={handleFilter}
      >
        <input
          type="text"
          name="searchName"
          placeholder="Search recipes by name..."
          className="w-full p-2 mt-8 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="cookingTime"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by cooking time</option>
          <option value="15">Less than 15 minutes</option>
          <option value="30">Less than 30 minutes</option>
          <option value="60">Less than 1 hour</option>
          <option value="120">Less than 2 hours</option>
        </select>

        <select
          name="sortOrder"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by...</option>
          <option value="az">Alphabetical (A–Z)</option>
          <option value="za">Alphabetical (Z–A)</option>
          <option value="cookLowHigh">Cooking Time: Low to High</option>
          <option value="cookHighLow">Cooking Time: High to Low</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button type="submit">
            <span className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Filter Recipes
            </span>
          </button>
          <button type="button" onClick={clearFilters}>
            <span className="inline-block px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600">
              Clear Filters
            </span>
          </button>
        </div>
      </form>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 w-max max-w-[95%] !py-0 p-8 lg:pt-0 md:p-16 lg:p-24">
        {fetchedRecipes.length > 0 ? (
          fetchedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="p-6 text-center text-gray-800 bg-white col-span-full rounded-xl drop-shadow-xl">Walang ganon, 'nak.</p>
        )}
      </div>

      <BackToTopButton />
    </main>
  );
}