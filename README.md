# Recipe App Practice

A modern recipe application built with Next.js. This project is a practice activity by Jerico de Vega, Intern at Old St. Labs.

## Overview

This app lets users browse a collection of recipes, view detailed information, and access cooking instructions. It demonstrates React hooks, state management, API routes, and responsive design using Tailwind CSS.

## Features

- Browse recipes on the home page
- View detailed recipe info (ingredients, instructions, etc.)
- Responsive and clean UI

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS

## Project Structure

```
recipe-app/
├── app/
│   ├── api/recipes/route.ts
│   ├── recipes/[id]/page.tsx
│   └── page.tsx
├── data/recipes.json
├── components/
│   ├── RecipeCard.tsx
│   └── RecipeDetail.tsx
├── styles/globals.css
└── package.json
```

## Getting Started

1. Clone the repo and install dependencies:
    ```
    npm install
    ```
2. Run the development server:
    ```
    npm run dev
    ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

*This is a practice activity for learning Next.js and modern React development.*