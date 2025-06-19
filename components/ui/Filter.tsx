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
    return <form id="recipeFilterForm" className="flex flex-col items-center w-full max-w-xl px-4 font-serif text-black" onSubmit={handleFilter}>
        <input type="text" name="searchName" placeholder="Search recipes by name..." className="w-full p-2 mt-8 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <select name="cookingTime" className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Filter by cooking time</option>
            <option value="15">Less than 15 minutes</option>
            <option value="30">Less than 30 minutes</option>
            <option value="60">Less than 1 hour</option>
            <option value="120">Less than 2 hours</option>
        </select>

        <select name="sortOrder" className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Sort by...</option>
            <option value="az">Alphabetical (A–Z)</option>
            <option value="za">Alphabetical (Z–A)</option>
            <option value="cookLowHigh">Cooking Time: Low to High</option>
            <option value="cookHighLow">Cooking Time: High to Low</option>
        </select>

        {
            /* Buttons */
        }
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
    </form>;
}
