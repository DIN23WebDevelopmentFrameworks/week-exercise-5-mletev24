import React from 'react';
import { IRecipe } from './App';

interface IRecipeProps {
  recipeData: IRecipe;
}

export default function Recipe({recipeData}: IRecipeProps) {
    return (
        <div>
          <h2>{recipeData.name}</h2>
          <img src={recipeData.image} alt={recipeData.name} />
          <div>
            <h3>Ingredients:</h3>
            <ul>
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Instructions:</h3>
            <ol>
              {recipeData.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
    )
}



// const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
//   return (
//     <div className="recipe">
//       <h2>{recipeData.name}</h2>
//       <img src={recipeData.image} alt={recipeData.name} />
//       <div>
//         <h3>Ingredients:</h3>
//         <ul>
//           {recipeData.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Instructions:</h3>
//         <ol>
//           {recipeData.instructions.map((instruction, index) => (
//             <li key={index}>{instruction}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Recipe;
