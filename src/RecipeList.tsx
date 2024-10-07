import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './App';

interface IRecipeListProps {
  recipes: IRecipe[];
}

export default function RecipeList( {recipes}: IRecipeListProps ) {
    return (
        <div>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipeData={recipe} />
          ))}
        </div>
      );
}



// const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
//   return (
//     <div className="recipe-list">
//       {recipes.map((recipe) => (
//         <Recipe key={recipe.id} recipeData={recipe} />
//       ))}
//     </div>
//   );
// };

// export default RecipeList;