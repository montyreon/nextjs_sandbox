"use client";

import { Filter } from './../components/ui/Filter';
import RecipeCard from "@/components/RecipeCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Recipe } from "@/types/recipe";
import BackToTopButton from "@/components/ui/BackToTopButton";
import React, { useEffect, useState } from "react";
import Collapsible from '@/components/ui/Collapsible';
import SkeletonCard from "@/components/SkeletonCard";

export default function Home() {
  const [fetchedRecipes, setFetchedRecipes] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<{
    name?: string;
    cookingTime?: string;
    sortOrder?: string;
  }>({});

  const [loading, setLoading] = useState<boolean>(true);

  // fetch recipes when filters change; also on initial load
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (filters.name) queryParams.append("name", filters.name);
    if (filters.cookingTime) queryParams.append("cookingTime", filters.cookingTime);
    if (filters.sortOrder) queryParams.append("sortOrder", filters.sortOrder);

    const fetchRecipes = async () => {
      setLoading(true); // start loading
      try {
        const res = await fetch(`/api/recipes?${queryParams.toString()}`, {
          cache: "no-store",
        });

        const data = await res.json();
        setFetchedRecipes(res.ok ? data : []);
      } catch (err) {
        console.error("Fetch failed:", err);
        setFetchedRecipes([]);
      } finally {
        setLoading(false); // end loading
      }
    };

    fetchRecipes();
  }, [filters]);

  return (
    <main className="relative flex flex-col items-center min-h-screen">
      
      {/* title and annimated background */}
      <AuroraBackground>
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          Ma, Anong Ulam?
        </h1>
      </AuroraBackground>

      {/* main content area */}
      <div className='!py-0 p-8 lg:pt-0 md:p-16 lg:p-24 max-w-[95%] w-full'>
        {/* filtering form */}
        <Collapsible children={<><Filter setFilters={setFilters} /></>} />


        {/* recipes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 ">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : fetchedRecipes.length > 0 ? (
            fetchedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="p-6 text-center text-gray-800 bg-white col-span-full rounded-xl drop-shadow-xl">
              Walang ganon, 'nak.
            </p>
          )}
        </div>
      </div>

      <BackToTopButton />
    </main>
  );
}