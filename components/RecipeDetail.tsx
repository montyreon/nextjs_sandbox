type RecipeDetailProps = {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    cookingTime: number;
    image: string;
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({
    name,
    ingredients,
    instructions,
    cookingTime,
    image,
}) => (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'sans-serif' }}>
        <h1>{name}</h1>
        <img
            src={image}
            alt={name}
            style={{ width: '100%', height: 'auto', borderRadius: 8, marginBottom: 16 }}
        />
        <p>
            <strong>Cooking Time:</strong> {cookingTime} minutes
        </p>
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
            ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
            {instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
            ))}
        </ol>
    </div>
);

export default RecipeDetail;