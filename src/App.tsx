import React, { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList"; 

export interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

function App() {

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error("Error fetching tags:", error));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes))
        .catch((error) => console.error("Error fetching recipes:", error));
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName) => {
    setSelectedTag(tagName);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag === null ? (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      ) : (
        <>
          <button onClick={handleBackToTags}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </>
      )}
    </div>
  )
}

export default App


// const App = () => {

//   const [tags, setTags] = useState([]);
//   const [selectedTag, setSelectedTag] = useState(null);
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/recipes/tags")
//       .then((response) => response.json())
//       .then((data) => setTags(data.tags))
//       .catch((error) => console.error("Error fetching tags:", error));
//   }, []);

//   useEffect(() => {
//     if (selectedTag) {
//       fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
//         .then((response) => response.json())
//         .then((data) => setRecipes(data.recipes))
//         .catch((error) => console.error("Error fetching recipes:", error));
//     }
//   }, [selectedTag]);

//   const handleSelectTag = (tagName) => {
//     setSelectedTag(tagName);
//   };

//   const handleBackToTags = () => {
//     setSelectedTag(null);
//     setRecipes([]);
//   };

//   return (
//     <div>
//       <h1>ACME Recipe O'Master</h1>
//       {selectedTag === null ? (
//         <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
//       ) : (
//         <>
//           <button onClick={handleBackToTags}>Back to Tags</button>
//           <RecipeList recipes={recipes} />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;