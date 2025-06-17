export interface Recipe {
    id: string
    name: string
    ingredients: string[]
    instructions: string[]
    cookingTime: number
    image: string
}

export const sampleRecipes: Recipe[] = [
    {
        id: "1",
        name: "Adobo",
        ingredients: [
            "1 kg chicken",
            "1/2 cup soy sauce",
            "1/2 cup vinegar",
            "6 cloves garlic, crushed",
            "2 bay leaves",
            "1 tsp peppercorns",
            "1 tbsp sugar",
            "1 cup water"
        ],
        instructions: [
            "Combine chicken, soy sauce, vinegar, garlic, bay leaves, and peppercorns in a pot.",
            "Marinate for 30 minutes.",
            "Bring to a boil, then simmer for 30-40 minutes.",
            "Add sugar and stir.",
            "Serve hot with rice."
        ],
        cookingTime: 60,
        image: "https://example.com/images/adobo.jpg"
    },
    {
        id: "2",
        name: "Sinigang na Baboy",
        ingredients: [
            "1 kg pork ribs",
            "1 onion, quartered",
            "2 tomatoes, quartered",
            "1 radish, sliced",
            "1 eggplant, sliced",
            "1 bunch kangkong (water spinach)",
            "1 pack sinigang mix",
            "2 liters water"
        ],
        instructions: [
            "Boil pork ribs in water until tender.",
            "Add onions and tomatoes, simmer for 10 minutes.",
            "Add radish and eggplant, cook until vegetables are tender.",
            "Add sinigang mix and kangkong.",
            "Simmer for 2 minutes and serve hot."
        ],
        cookingTime: 75,
        image: "https://example.com/images/sinigang.jpg"
    },
    {
        id: "3",
        name: "Pancit Canton",
        ingredients: [
            "250g pancit canton noodles",
            "200g pork, sliced",
            "100g shrimp, peeled",
            "1 carrot, julienned",
            "1/2 cabbage, sliced",
            "1 onion, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 cups chicken broth"
        ],
        instructions: [
            "Sauté garlic and onion in a pan.",
            "Add pork and cook until browned.",
            "Add shrimp and cook until pink.",
            "Add carrots and cabbage, stir-fry for 2 minutes.",
            "Pour in chicken broth and soy sauce, bring to a boil.",
            "Add noodles and cook until liquid is absorbed.",
            "Serve hot."
        ],
        cookingTime: 40,
        image: "https://example.com/images/pancit-canton.jpg"
    },
    {
        id: "4",
        name: "Kare-Kare",
        ingredients: [
            "1 kg oxtail, cut into pieces",
            "1 banana heart, sliced",
            "1 bundle string beans, cut into 2-inch pieces",
            "1 eggplant, sliced",
            "1/2 cup peanut butter",
            "1/4 cup ground rice",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "8 cups water",
            "Annatto seeds"
        ],
        instructions: [
            "Boil oxtail until tender.",
            "Sauté garlic and onion, add annatto seeds for color.",
            "Add boiled oxtail and peanut butter, mix well.",
            "Add ground rice to thicken sauce.",
            "Add vegetables and cook until tender.",
            "Serve with bagoong (shrimp paste)."
        ],
        cookingTime: 120,
        image: "https://example.com/images/kare-kare.jpg"
    },
    {
        id: "5",
        name: "Leche Flan",
        ingredients: [
            "10 egg yolks",
            "1 can condensed milk",
            "1 can evaporated milk",
            "1 cup sugar",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Caramelize sugar in a llanera (mold).",
            "Mix egg yolks, condensed milk, evaporated milk, and vanilla.",
            "Pour mixture into the mold over caramel.",
            "Steam for 30-40 minutes.",
            "Cool, then invert onto a plate to serve."
        ],
        cookingTime: 60,
        image: "https://example.com/images/leche-flan.jpg"
    }
];