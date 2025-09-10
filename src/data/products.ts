export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  detailedDescription: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Produto 1",
    price: 199.90,
    category: "Eletrônicos",
    description: "Produto de alta qualidade com design moderno e funcionalidade excepcional.",
    detailedDescription: "Este produto combina tecnologia avançada com design minimalista. Fabricado com materiais premium, oferece durabilidade e performance superiores. Ideal para uso diário, proporcionando uma experiência única e satisfatória.",
    image: "/vercel.svg",
    featured: true
  },
  {
    id: "2", 
    name: "Produto 2",
    price: 299.90,
    category: "Casa & Jardim",
    description: "Solução inovadora para o seu dia a dia, combinando praticidade e estilo.",
    detailedDescription: "Desenvolvido com foco na praticidade, este produto revoluciona a forma como você organiza sua rotina. Com acabamento refinado e funcionalidades inteligentes, é perfeito para quem busca eficiência sem abrir mão da estética.",
    image: "/vercel.svg",
    featured: true
  },
  {
    id: "3",
    name: "Produto 3", 
    price: 399.90,
    category: "Moda & Acessórios",
    description: "Acessório elegante que complementa perfeitamente seu estilo pessoal.",
    detailedDescription: "Um item essencial para compor looks modernos e sofisticados. Criado com atenção aos detalhes, este produto oferece versatilidade e qualidade premium. Perfeito para diversas ocasiões, do casual ao formal.",
    image: "/vercel.svg",
    featured: true
  },
  {
    id: "4",
    name: "Produto 4",
    price: 159.90,
    category: "Esporte & Lazer",
    description: "Equipamento desenvolvido para otimizar sua performance e conforto.",
    detailedDescription: "Projetado para atender às necessidades de atletas e entusiastas. Com tecnologia de ponta e materiais respiráveis, proporciona máximo conforto durante atividades físicas. Resistente e durável para uso intenso.",
    image: "/vercel.svg",
    featured: true
  },
  {
    id: "5",
    name: "Produto 5",
    price: 249.90,
    category: "Saúde & Bem-estar",
    description: "Produto wellness que promove seu bem-estar e qualidade de vida.",
    detailedDescription: "Desenvolvido com base em pesquisas científicas para melhorar sua qualidade de vida. Com componentes naturais e tecnologia inovadora, oferece benefícios comprovados para seu bem-estar físico e mental.",
    image: "/vercel.svg",
    featured: true
  }
];

export const categories = [
  "Todos",
  "Eletrônicos", 
  "Casa & Jardim",
  "Moda & Acessórios",
  "Esporte & Lazer",
  "Saúde & Bem-estar"
];

export const priceRanges = [
  { label: "Todos", min: 0, max: Infinity },
  { label: "Até R$ 200", min: 0, max: 200 },
  { label: "R$ 200 - R$ 400", min: 200, max: 400 },
  { label: "Acima de R$ 400", min: 400, max: Infinity }
];
