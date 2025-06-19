"use client"
import React from "react";

/**
 * Filter component for recipes.
 * Allows users to filter recipes by name, cooking time, and sort order.
 * @param setFilters - Function to update the filters state.
 */
export function Filter({
    setFilters,
}: {
    setFilters: React.Dispatch<React.SetStateAction<{
        name?: string;
        cookingTime?: string;
        sortOrder?: string;
    }>>;
}) {
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
        <form
            id="recipeFilterForm"
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[720px] px-4 pb-8 font-serif text-black"
            onSubmit={handleFilter}
        >
            {/* Search Name */}
            <input
                type="text"
                name="searchName"
                placeholder="Ano gusto mo..."
                className="w-full col-span-1 p-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* (Optional) Empty div to align buttons properly on smaller screens */}
            <div className="block sm:hidden" />

            {/* Cooking Time */}
            <select
                name="cookingTime"
                className="w-full p-2 text-black border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Cooking time...</option>
                <option value="15">Less than 15 minutes</option>
                <option value="30">Less than 30 minutes</option>
                <option value="60">Less than 1 hour</option>
                <option value="120">Less than 2 hours</option>
            </select>

            {/* Sort Order */}
            <select
                name="sortOrder"
                className="w-full p-2 text-black border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Sort by...</option>
                <option value="az">Alphabetical (A–Z)</option>
                <option value="za">Alphabetical (Z–A)</option>
                <option value="cookLowHigh">Cooking Time: Low to High</option>
                <option value="cookHighLow">Cooking Time: High to Low</option>
            </select>

            {/* Button Row */}
            <div className="flex justify-center col-span-1 gap-4 mt-2 sm:col-span-2">
                {/* Filter Button */}
                {/* white gold gradient */}
                <button type="submit" className="px-8 py-2 text-white transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-tr from-yellow-400 to-yellow-600 brightness-110 hover:brightness-[1.2]">
                    Filter
                </button>
                {/* Clear Button */}
                <button type="button" onClick={clearFilters} className="px-4 py-2 text-white backdrop-blur-sm transition-all duration-200 rounded-lg shadow-lg bg-gray-300/75 hover:bg-gray-300">
                    Clear
                </button>
            </div>
        </form>)
}
