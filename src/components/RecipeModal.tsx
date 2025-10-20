import { X, Clock, Flame, DropletsIcon, Users, CheckCircle } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-72 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            {recipe.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
              <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.calories}</div>
              <div className="text-sm text-gray-600">calorias</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
              <DropletsIcon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.protein}g</div>
              <div className="text-sm text-gray-600">proteína</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.prepTime}</div>
              <div className="text-sm text-gray-600">minutos</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.servings}</div>
              <div className="text-sm text-gray-600">porção</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
              Benefícios
            </h3>
            <div className="flex flex-wrap gap-2">
              {recipe.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ingredientes
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700"
                >
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Modo de Preparo
            </h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700"
                >
                  <span className="bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span className="pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
