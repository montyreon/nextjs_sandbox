"use client";
import React from "react";

export function Filter() {
    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // set the form values to the web parameters
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const cookingTime = formData.get("cookingTime") as string;
        // construct the URL with the parameters
        const params = new URLSearchParams();
        if (typeof name === "string" && name.trim() !== "") {
            params.append("name", name)
        }
        if (typeof cookingTime === "string" && cookingTime.trim() !== "") {
            params.append("cookingTime", cookingTime)
        }
        // redirect to the recipes page with the parameters
        window.location.href = `?${params.toString()}`;
    }

    return <form className="font-serif text-black" onSubmit={handleFilter}>
        {
            /* name input */
        }
        <input type="text" name="name" placeholder="Search recipes by name..." className="w-full max-w-md p-2 mt-8 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {
            /* filter by cooking time */
        }
        <select name="cookingTime" className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Filter by cooking time</option>
            <option value="15">Less than 15 minutes</option>
            <option value="30">Less than 30 minutes</option>
            <option value="60">Less than 1 hour</option>
            <option value="120">Less than 2 hours</option>
        </select>
        <button type="submit">
            <span className="inline-block px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
                Filter Recipes
            </span>
        </button>
    </form>;
}

