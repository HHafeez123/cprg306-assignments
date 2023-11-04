"use client";
import { useEffect, useState } from 'react';

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const customMessageItems = ["bananas 🍌", "dish soap 🍽️", "hand soap 🧼", "paper towels", "pasta sauce 🍝", "toilet paper"];

    useEffect(() => {
        async function fetchMealIdeas() {
            if(!ingredient) return;

            const firstWord = ingredient.split(" ")[0];

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${firstWord}`);
                const data = await response.json();
                if (data.meals) {
                    setMeals(data.meals);
                } else {
                    setMeals([]);
                }
            } catch(error) {
                console.error("Failed to fetch meals:", error);
            }
        }

        fetchMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>

            {!ingredient ? 
                <div>Select an item to see meal ideas.</div>
                :
                (customMessageItems.includes(ingredient) && meals.length === 0) ?
                <div>No meal ideas found for {ingredient}.</div>
                :
                <>
                    <h2>Here are some meal ideas using {ingredient}:</h2>
                    <ul>
                        {meals && meals.map(meal => (
                            <li key={meal.idMeal}>
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                </>
            }
        </div>
    );
}

export default MealIdeas;
