import { useState } from 'react';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { recipes } from './data/recipes';
import { Recipe } from './types';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <img
              src="https://i.postimg.cc/yNH2Dsh7/PNG-LOGO.png"
              alt="Núcleo Saudável"
              className="h-16 md:h-20"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            20 Receitas Saudáveis para Café da Manhã
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra receitas deliciosas, práticas e nutritivas. Todas abaixo de 300 calorias,
            ricas em proteínas e prontas em até 20 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
            />
          ))}
        </div>

        <div className="text-center space-y-0">
          <img
            src="https://i.postimg.cc/ZK8QDWpx/SC1.png"
            alt="Material Gratuito"
            className="w-full max-w-4xl mx-auto block"
          />
          <img
            src="https://i.postimg.cc/15hTHGn4/CAPA-QUIZ.png"
            alt="Capa Quiz"
            className="w-full max-w-4xl mx-auto block"
          />
          <img
            src="/src/assets/SC3.png"
            alt="SC3"
            className="w-full max-w-4xl mx-auto block"
          />
          <img
            src="/src/assets/SC5-OFERTA.png"
            alt="SC5 Oferta"
            className="w-full max-w-4xl mx-auto block"
          />
          
          <div className="py-8">
            <a
              href="https://receitasmanualdanutri.netlify.app/?utm_source=instagram&utm_medium=organic&utm_campaign=isca_gratis_20_receitas&utm_content=funil_comentarios&utm_term=manual_nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse"
              style={{ backgroundColor: '#00b000' }}
            >
              QUERO O MANUAL DA NUTRI
            </a>
          </div>
          
          <img
            src="/src/assets/SC4-GARANTIA.png"
            alt="SC4 Garantia"
            className="w-full max-w-4xl mx-auto block"
          />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Núcleo Saudável. Transformando vidas através da alimentação saudável.
          </p>
        </div>
      </footer>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;
