import React from 'react';

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}


export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
    return (
      <button onClick={() => onSelectTag(tagName)}>
        {tagName}
      </button>
    );
}



// const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
//   return (
//     <button className="recipe-tag" onClick={() => onSelectTag(tagName)}>
//       {tagName}
//     </button>
//   );
// };

// export default RecipeTag;