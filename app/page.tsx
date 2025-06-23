"use client";

import { Filter } from './../components/ui/Filter';
import RecipeCard from "@/components/RecipeCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import BackToTopButton from "@/components/ui/BackToTopButton";
import React, { useState } from "react";
import Collapsible from '@/components/ui/Collapsible';
import SkeletonCard from "@/components/SkeletonCard";
import { useRecipes } from '@/hooks/useRecipes';

export default function Home() {
  const [filters, setFilters] = useState<{
    name?: string;
    cookingTime?: string;
    sortOrder?: string;
  }>({});

  // custom hook to fetch recipes based on filters
  const { recipes: fetchedRecipes = [], loading } = useRecipes(filters);

  return (
    <main className="relative flex flex-col items-center min-h-screen">

      {/* title and annimated background */}
      <AuroraBackground>
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          Ma, Anong Ulam?
        </h1>
      </AuroraBackground>

      {/* main content area */}
      <div className='!py-0 p-8 lg:pt-0 md:p-16 lg:p-24 max-w-[95%] xl:max-w-[1080px] w-full'>
        {/* filtering form */}
        <Collapsible >
          <Filter setFilters={setFilters} />
        </Collapsible>

        {/* recipes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 ">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : Array.isArray(fetchedRecipes) && fetchedRecipes.length > 0 ? (
            fetchedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="flex justify-center items-center w-full col-span-full">
              <p className="p-6 text-center text-white text-3xl rounded-xl drop-shadow-lg">
                Walang ganon, &apos;nak.
              </p>
            </div>
          )}
        </div>
      </div>

      <BackToTopButton />
    </main>
  );
}
