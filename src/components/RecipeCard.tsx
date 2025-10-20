import { Clock, Flame, DropletsIcon } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {recipe.prepTime} min
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {recipe.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-1 text-gray-700">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">{recipe.calories} kcal</span>
          </div>

          <div className="flex items-center space-x-1 text-gray-700">
            <DropletsIcon className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">{recipe.protein}g proteína</span>
          </div>

          <div className="flex items-center space-x-1 text-gray-700">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium">{recipe.prepTime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
