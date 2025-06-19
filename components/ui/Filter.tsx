"use client"
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; 

/**
 * Filter component for recipes.
 * Allows users to filter recipes by name, cooking time, and sort order.
 * Buttons are enabled/disabled based on user input and applied filter state.
 * @param {object} props
 * @param setFilters - Function to update the filters state in the parent component.
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
    // state for the filter inputs
    const [nameInput, setNameInput] = useState("");
    const [cookingTimeInput, setCookingTimeInput] = useState("");
    const [sortOrderInput, setSortOrderInput] = useState("");

    // state for tracking applied filters
    const [appliedFilters, setAppliedFilters] = useState<{
        name?: string;
        cookingTime?: string;
        sortOrder?: string;
    }>({});

    // apply and clear button enabled/disabled states
    const isFilterEnabled = nameInput || cookingTimeInput || sortOrderInput;
    const isClearEnabled =
        !!appliedFilters.name ||
        !!appliedFilters.cookingTime ||
        !!appliedFilters.sortOrder;

    // sets and applies filters when the component mounts or when appliedFilters change
    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFilters = {
            name: nameInput || undefined,
            cookingTime: cookingTimeInput || undefined,
            sortOrder: sortOrderInput || undefined,
        };
        setFilters(newFilters);
        setAppliedFilters(newFilters);
    };

    const clearFilters = () => {
        // clear state in the parent
        setFilters({});
        // clear internal tracking state
        setAppliedFilters({});
        // reset input fields
        setNameInput("");
        setCookingTimeInput("");
        setSortOrderInput("");
    };

    return (
        <form
            id="recipeFilterForm"
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[720px] px-4 pb-8 font-serif text-black pt-2"
            onSubmit={handleFilter}
        >
            {/* search */}
            <input
                type="text"
                name="searchName"
                placeholder="Ano gusto mo..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full col-span-1 p-2 rounded-lg bg-white/80 backdrop-blur-sm sm:col-span-2 focus:outline-none focus:ring-2 ring-offset-2 focus:ring-yellow-400 overflow-visible"
            />
            <select
                name="cookingTime"
                value={cookingTimeInput}
                onChange={(e) => setCookingTimeInput(e.target.value)}
                className="w-full p-2 text-black rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                <option value="">Cooking time...</option>
                <option value="15">Less than 15 minutes</option>
                <option value="30">Less than 30 minutes</option>
                <option value="60">Less than 1 hour</option>
                <option value="120">Less than 2 hours</option>
            </select>

            {/* sorting */}
            <select
                name="sortOrder"
                value={sortOrderInput}
                onChange={(e) => setSortOrderInput(e.target.value)}
                className="w-full p-2 text-black rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                <option value="">Sort by...</option>
                <option value="az">Alphabetical (A–Z)</option>
                <option value="za">Alphabetical (Z–A)</option>
                <option value="cookLowHigh">Cooking Time: Low to High</option>
                <option value="cookHighLow">Cooking Time: High to Low</option>
            </select>

            {/* filter apply and clear buttons */}
            <div className="flex justify-center col-span-1 gap-2 mt-2 sm:col-span-2">
                {/* filter button */}
                <button
                    type="submit"
                    disabled={!isFilterEnabled}
                    className={cn(
                        "px-8 py-2 text-white transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-bl from-yellow-400 to-yellow-600 brightness-125",
                        "disabled:opacity-60 disabled:cursor-not-allowed disabled:brightness-110",
                         isFilterEnabled && "hover:brightness-[1.2]"
                    )}
                >
                    Filter
                </button>
                {/* clear button */}
                <button
                    type="button"
                    onClick={clearFilters}
                    disabled={!isClearEnabled}
                    className={cn(
                        "px-4 py-2 text-gray-800 backdrop-blur-sm transition-all duration-200 rounded-lg shadow-lg bg-gray-200/50",
                        "disabled:opacity-80 disabled:cursor-not-allowed",
                        isClearEnabled && "hover:bg-gray-300/75 hover:text-white"
                    )}
                >
                    Clear
                </button>
            </div>
        </form>
    );
}