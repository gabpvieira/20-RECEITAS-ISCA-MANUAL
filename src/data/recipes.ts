import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Overnight Oats de Banana e Canela',
    description: 'Aveia cremosa preparada na noite anterior com banana e canela',
    calories: 245,
    protein: 12,
    prepTime: 5,
    servings: 1,
    ingredients: [
      '40g de aveia em flocos',
      '150ml de leite desnatado',
      '1 banana pequena amassada',
      '1 colher de chá de canela',
      '1 colher de sopa de chia'
    ],
    instructions: [
      'Misture a aveia, o leite e a chia em um pote',
      'Adicione a banana amassada e a canela',
      'Mexa bem todos os ingredientes',
      'Tampe e leve à geladeira por no mínimo 4 horas',
      'Sirva gelado pela manhã'
    ],
    benefits: ['Alto teor de fibras', 'Fornece energia sustentada', 'Preparo antecipado'],
    image: 'https://i.postimg.cc/QCShNVKh/Overnight-Oats-de-Banana-e-Canela.jpg'
  },
  {
    id: 2,
    title: 'Omelete de Claras com Espinafre',
    description: 'Omelete leve e proteica com espinafre fresco',
    calories: 180,
    protein: 24,
    prepTime: 10,
    servings: 1,
    ingredients: [
      '4 claras de ovo',
      '1 xícara de espinafre fresco',
      '1 tomate picado',
      'Sal e pimenta a gosto',
      'Spray de óleo ou 1 colher de chá de azeite'
    ],
    instructions: [
      'Bata as claras levemente com sal e pimenta',
      'Aqueça uma frigideira antiaderente com o spray de óleo',
      'Refogue o espinafre rapidamente',
      'Adicione as claras batidas',
      'Cozinhe em fogo médio até firmar, adicione o tomate e dobre ao meio'
    ],
    benefits: ['Baixíssimo em calorias', 'Altíssimo teor proteico', 'Rico em ferro'],
    image: 'https://i.postimg.cc/Xqx4NXGz/Omelete-de-Claras-com-Espinafre.webp'
  },
  {
    id: 3,
    title: 'Iogurte Grego com Frutas Vermelhas',
    description: 'Combinação perfeita de proteínas e antioxidantes',
    calories: 210,
    protein: 18,
    prepTime: 3,
    servings: 1,
    ingredients: [
      '150g de iogurte grego natural desnatado',
      '50g de morangos',
      '30g de mirtilos',
      '1 colher de sopa de granola light',
      '1 colher de chá de mel (opcional)'
    ],
    instructions: [
      'Coloque o iogurte grego em uma tigela',
      'Lave e corte os morangos',
      'Adicione os morangos e mirtilos sobre o iogurte',
      'Finalize com a granola',
      'Regue com mel se desejar'
    ],
    benefits: ['Rico em probióticos', 'Antioxidantes naturais', 'Preparo instantâneo'],
    image: 'https://i.postimg.cc/NFQQwRMz/Iogurte-Grego-com-Frutas-Vermelhas.webp'
  },
  {
    id: 4,
    title: 'Panqueca de Banana e Aveia',
    description: 'Panqueca natural feita apenas com banana e aveia',
    calories: 260,
    protein: 10,
    prepTime: 12,
    servings: 1,
    ingredients: [
      '1 banana madura',
      '40g de aveia em flocos',
      '2 ovos',
      '1 pitada de canela',
      'Spray de óleo para untar'
    ],
    instructions: [
      'Amasse a banana com um garfo',
      'Adicione os ovos e misture bem',
      'Acrescente a aveia e a canela',
      'Deixe a massa descansar por 2 minutos',
      'Aqueça a frigideira e faça pequenas panquecas'
    ],
    benefits: ['Sem farinha refinada', 'Naturalmente doce', 'Rica em potássio'],
    image: 'https://i.postimg.cc/T1Qf2hLZ/Panqueca-de-Banana-e-Aveia.webp'
  },
  {
    id: 5,
    title: 'Smoothie Verde Proteico',
    description: 'Smoothie cremoso cheio de nutrientes',
    calories: 195,
    protein: 15,
    prepTime: 5,
    servings: 1,
    ingredients: [
      '1 xícara de espinafre fresco',
      '1/2 banana congelada',
      '150ml de leite desnatado',
      '1 scoop de whey protein de baunilha (opcional)',
      '1 colher de sopa de pasta de amendoim'
    ],
    instructions: [
      'Coloque o espinafre no liquidificador',
      'Adicione a banana, o leite e a pasta de amendoim',
      'Bata até ficar homogêneo',
      'Se usar whey protein, adicione por último e bata rapidamente',
      'Sirva imediatamente'
    ],
    benefits: ['Vitaminas e minerais', 'Saciedade prolongada', 'Hidratante'],
    image: 'https://i.postimg.cc/cCddNfHR/Smoothie-Verde-Proteico.avif'
  },
  {
    id: 6,
    title: 'Tapioca com Queijo Cottage',
    description: 'Tapioca leve recheada com queijo cottage',
    calories: 235,
    protein: 16,
    prepTime: 8,
    servings: 1,
    ingredients: [
      '3 colheres de sopa de goma de tapioca',
      '100g de queijo cottage',
      'Tomate cereja picado',
      'Manjericão fresco',
      'Sal e orégano a gosto'
    ],
    instructions: [
      'Aqueça uma frigideira antiaderente',
      'Espalhe a goma de tapioca formando um círculo',
      'Quando firmar, vire a tapioca',
      'Adicione o queijo cottage, tomate e manjericão',
      'Dobre ao meio e sirva quente'
    ],
    benefits: ['Sem glúten', 'Baixo índice glicêmico', 'Digestão leve'],
    image: 'https://i.postimg.cc/XJfnhsVg/Tapioca-com-Queijo-Cottage.webp'
  },
  {
    id: 7,
    title: 'Wrap de Ovo com Vegetais',
    description: 'Wrap de omelete recheado com vegetais frescos',
    calories: 220,
    protein: 19,
    prepTime: 12,
    servings: 1,
    ingredients: [
      '2 ovos inteiros',
      '1/2 pimentão vermelho fatiado',
      '1/2 xícara de cogumelos',
      'Folhas de alface',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Bata os ovos com sal e pimenta',
      'Faça uma omelete fina em frigideira antiaderente',
      'Refogue rapidamente os vegetais',
      'Coloque a omelete em um prato',
      'Adicione os vegetais e a alface, enrole como um wrap'
    ],
    benefits: ['Versatilidade', 'Rico em vitaminas', 'Baixo carboidrato'],
    image: 'https://i.postimg.cc/D077K1Zc/Wrap-de-Ovo-com-Vegetais.webp'
  },
  {
    id: 8,
    title: 'Bowl de Açaí Light',
    description: 'Açaí menos calórico com toppings saudáveis',
    calories: 285,
    protein: 11,
    prepTime: 7,
    servings: 1,
    ingredients: [
      '100g de polpa de açaí sem açúcar',
      '1/2 banana congelada',
      '50ml de água',
      '1 colher de sopa de granola',
      'Frutas frescas a gosto'
    ],
    instructions: [
      'Bata a polpa de açaí com a banana e água',
      'A consistência deve ficar cremosa e firme',
      'Coloque em uma tigela',
      'Decore com granola e frutas',
      'Sirva imediatamente'
    ],
    benefits: ['Antioxidante poderoso', 'Energia natural', 'Rico em fibras'],
    image: 'https://i.postimg.cc/QCjjrctm/Bowl-de-A-a-Light.webp'
  },
  {
    id: 9,
    title: 'Toast Integral com Abacate',
    description: 'Torrada com abacate amassado e temperos',
    calories: 265,
    protein: 9,
    prepTime: 6,
    servings: 1,
    ingredients: [
      '2 fatias de pão integral',
      '1/2 abacate maduro',
      'Suco de 1/4 de limão',
      'Sal, pimenta e flocos de pimenta',
      'Tomate cereja'
    ],
    instructions: [
      'Torre as fatias de pão',
      'Amasse o abacate com o limão, sal e pimenta',
      'Espalhe o abacate sobre as torradas',
      'Decore com tomate cereja fatiado',
      'Finalize com flocos de pimenta'
    ],
    benefits: ['Gorduras saudáveis', 'Saciedade prolongada', 'Rico em vitamina E'],
    image: 'https://i.postimg.cc/ZR8JgwTd/Toast-Integral-com-Abacate.jpg'
  },
  {
    id: 10,
    title: 'Mingau de Aveia com Maçã',
    description: 'Mingau cremoso e reconfortante',
    calories: 210,
    protein: 8,
    prepTime: 10,
    servings: 1,
    ingredients: [
      '1/2 xícara de aveia em flocos',
      '1 xícara de leite desnatado',
      '1/2 maçã picada',
      '1 colher de chá de canela',
      '1 colher de chá de mel'
    ],
    instructions: [
      'Aqueça o leite em uma panela',
      'Adicione a aveia e mexa bem',
      'Cozinhe por 5 minutos mexendo sempre',
      'Adicione a maçã picada e canela',
      'Finalize com mel e sirva quente'
    ],
    benefits: ['Aquece o corpo', 'Fibras solúveis', 'Sensação de saciedade'],
    image: '/images/Mingau de Aveia com Maçã.jpg'
  },
  {
    id: 11,
    title: 'Crepioca Recheada',
    description: 'Combinação de crepe e tapioca com recheio leve',
    calories: 255,
    protein: 17,
    prepTime: 10,
    servings: 1,
    ingredients: [
      '2 colheres de sopa de goma de tapioca',
      '1 ovo',
      '50g de frango desfiado',
      '2 colheres de sopa de requeijão light',
      'Cebolinha picada'
    ],
    instructions: [
      'Misture o ovo com a tapioca',
      'Despeje em frigideira quente antiaderente',
      'Quando firmar, vire',
      'Adicione o recheio de frango e requeijão',
      'Dobre e sirva com cebolinha'
    ],
    benefits: ['Sem glúten', 'Alta proteína', 'Versátil no recheio'],
    image: 'https://i.postimg.cc/MZYQfDy1/Crepioca-Recheada.webp'
  },
  {
    id: 12,
    title: 'Vitamina de Banana com Aveia',
    description: 'Vitamina cremosa e nutritiva',
    calories: 230,
    protein: 13,
    prepTime: 5,
    servings: 1,
    ingredients: [
      '1 banana média',
      '200ml de leite desnatado',
      '2 colheres de sopa de aveia',
      '1 colher de chá de mel',
      'Gelo a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo e cremoso',
      'Adicione gelo se preferir gelado',
      'Bata novamente rapidamente',
      'Sirva imediatamente'
    ],
    benefits: ['Rápido preparo', 'Energia imediata', 'Fácil digestão'],
    image: 'https://i.postimg.cc/fWv9SKxm/Vitamina-de-Banana-com-Aveia.jpg'
  },
  {
    id: 13,
    title: 'Salada de Frutas com Chia',
    description: 'Mix refrescante de frutas com sementes de chia',
    calories: 185,
    protein: 5,
    prepTime: 8,
    servings: 1,
    ingredients: [
      '1/2 maçã picada',
      '1 kiwi fatiado',
      '5 morangos cortados',
      '1 colher de sopa de chia',
      'Suco de 1/2 laranja'
    ],
    instructions: [
      'Corte todas as frutas em pedaços pequenos',
      'Coloque em uma tigela',
      'Adicione as sementes de chia',
      'Regue com o suco de laranja',
      'Misture delicadamente e sirva'
    ],
    benefits: ['Rico em vitamina C', 'Hidratante', 'Antioxidantes naturais'],
    image: 'https://i.postimg.cc/FFxLkZjS/Salada-de-Frutas-com-Chia.jpg'
  },
  {
    id: 14,
    title: 'Muffin de Banana Fit',
    description: 'Muffin individual saudável de banana',
    calories: 290,
    protein: 12,
    prepTime: 18,
    servings: 1,
    ingredients: [
      '1 banana madura',
      '1 ovo',
      '3 colheres de sopa de aveia',
      '1 colher de chá de fermento',
      'Canela a gosto'
    ],
    instructions: [
      'Amasse a banana em uma tigela',
      'Adicione o ovo e misture bem',
      'Acrescente a aveia, fermento e canela',
      'Despeje em uma forminha untada',
      'Asse no micro-ondas por 3 minutos ou forno por 15 minutos'
    ],
    benefits: ['Sem açúcar adicionado', 'Pode fazer antecipado', 'Portátil'],
    image: '/images/Muffin de Banana Fit.webp'
  },
  {
    id: 15,
    title: 'Queijo Cottage com Nozes',
    description: 'Combinação proteica com crocância',
    calories: 215,
    protein: 20,
    prepTime: 3,
    servings: 1,
    ingredients: [
      '150g de queijo cottage',
      '4 nozes picadas',
      '1 colher de chá de mel',
      'Canela em pó',
      'Frutas vermelhas (opcional)'
    ],
    instructions: [
      'Coloque o queijo cottage em uma tigela',
      'Pique as nozes grosseiramente',
      'Espalhe as nozes sobre o queijo',
      'Regue com mel',
      'Finalize com uma pitada de canela'
    ],
    benefits: ['Muito proteico', 'Gorduras saudáveis', 'Zero preparo'],
    image: '/images/Queijo Cottage com Nozes.webp'
  },
  {
    id: 16,
    title: 'Chia Pudding de Coco',
    description: 'Pudim de chia cremoso com sabor tropical',
    calories: 220,
    protein: 9,
    prepTime: 5,
    servings: 1,
    ingredients: [
      '3 colheres de sopa de chia',
      '150ml de leite de coco light',
      '1 colher de chá de coco ralado',
      '1/2 colher de chá de essência de baunilha',
      'Frutas para decorar'
    ],
    instructions: [
      'Misture a chia com o leite de coco',
      'Adicione a essência de baunilha',
      'Mexa bem e leve à geladeira por 4 horas',
      'Ao servir, polvilhe coco ralado',
      'Decore com frutas frescas'
    ],
    benefits: ['Preparo antecipado', 'Rico em ômega-3', 'Sabor tropical'],
    image: '/images/Chia Pudding de Coco.webp'
  },
  {
    id: 17,
    title: 'Toast Francês Proteico',
    description: 'Versão saudável da rabanada',
    calories: 275,
    protein: 16,
    prepTime: 12,
    servings: 1,
    ingredients: [
      '2 fatias de pão integral',
      '2 ovos',
      '50ml de leite desnatado',
      'Canela e essência de baunilha',
      'Frutas vermelhas para servir'
    ],
    instructions: [
      'Bata os ovos com o leite, canela e baunilha',
      'Mergulhe as fatias de pão na mistura',
      'Aqueça uma frigideira antiaderente',
      'Doure as fatias dos dois lados',
      'Sirva com frutas vermelhas'
    ],
    benefits: ['Versão saudável', 'Rico em proteínas', 'Sabor indulgente'],
    image: 'https://i.postimg.cc/CM4qnNjZ/Toast-Franc-s-Proteico.jpg'
  },
  {
    id: 18,
    title: 'Bowl de Mamão com Granola',
    description: 'Mamão papaya com cobertura crocante',
    calories: 195,
    protein: 7,
    prepTime: 5,
    servings: 1,
    ingredients: [
      '1/2 mamão papaya',
      '100g de iogurte natural',
      '2 colheres de sopa de granola',
      '1 colher de sopa de linhaça',
      'Mel a gosto'
    ],
    instructions: [
      'Corte o mamão ao meio e retire as sementes',
      'Coloque o iogurte dentro do mamão',
      'Adicione a granola e a linhaça',
      'Regue com mel se desejar',
      'Sirva imediatamente'
    ],
    benefits: ['Rico em fibras', 'Auxilia digestão', 'Apresentação bonita'],
    image: 'https://i.postimg.cc/L66Zt1TX/Bowl-de-Mam-o-com-Granola.webp'
  },
  {
    id: 19,
    title: 'Tortilha Espanhola Light',
    description: 'Versão leve da tradicional tortilha',
    calories: 245,
    protein: 18,
    prepTime: 15,
    servings: 1,
    ingredients: [
      '2 ovos',
      '1 batata pequena cozida',
      '1/4 de cebola picada',
      'Sal e pimenta',
      'Salsinha fresca'
    ],
    instructions: [
      'Corte a batata cozida em rodelas finas',
      'Refogue a cebola até murchar',
      'Bata os ovos com sal e pimenta',
      'Adicione a batata e cebola aos ovos',
      'Despeje em frigideira e cozinhe dos dois lados'
    ],
    benefits: ['Versátil', 'Pode servir frio', 'Sacia por horas'],
    image: '/images/Tortilha Espanhola Light.jpg'
  },
  {
    id: 20,
    title: 'Smoothie Bowl de Morango',
    description: 'Bowl cremoso de morango para comer com colher',
    calories: 255,
    protein: 14,
    prepTime: 8,
    servings: 1,
    ingredients: [
      '150g de morangos congelados',
      '1/2 banana congelada',
      '100g de iogurte grego',
      'Toppings: granola, coco, frutas',
      '30ml de leite'
    ],
    instructions: [
      'Bata os morangos, banana, iogurte e leite',
      'A consistência deve ser bem espessa',
      'Despeje em uma tigela',
      'Decore com granola, coco e frutas frescas',
      'Sirva imediatamente com colher'
    ],
    benefits: ['Rico em antioxidantes', 'Refrescante', 'Visualmente atrativo'],
    image: '/images/Smoothie Bowl de Morango.jpg'
  }
];
