export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  detailedDescription: string;
  image: string;
  featured: boolean;
  stock: number; // Adicionado estoque
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ícone Pack - Minimalista",
    price: 49.90,
    category: "Design Assets",
    description: "100+ ícones vetoriais para projetos modernos.",
    detailedDescription: "Um conjunto completo de ícones SVG otimizados, perfeitos para interfaces de aplicativos e sites. Fáceis de customizar e escalar.",
    image: "/file.svg",
    featured: true,
    stock: 99
  },
  {
    id: "2", 
    name: "UI Kit - Dashboard",
    price: 129.90,
    category: "UI Kits",
    description: "Componentes pré-construídos para painéis de controle.",
    detailedDescription: "Acelere seu desenvolvimento com este kit de UI para Figma e React. Inclui gráficos, tabelas, formulários e muito mais, com um design consistente.",
    image: "/window.svg",
    featured: true,
    stock: 50
  },
  {
    id: "3",
    name: "Preset Pack - Fotografia Urbana", 
    price: 79.90,
    category: "Presets",
    description: "15 presets para Lightroom com temática urbana.",
    detailedDescription: "Transforme suas fotos com um clique. Este pacote oferece uma variedade de estilos, desde o vintage ao moderno, para dar vida às suas imagens urbanas.",
    image: "/globe.svg",
    featured: true,
    stock: 200
  },
  {
    id: "4",
    name: "Template de Site - Portfólio",
    price: 99.90,
    category: "Templates",
    description: "Template Next.js para portfólios de criativos.",
    detailedDescription: "Um template de site responsivo e otimizado para SEO, construído com Next.js e Tailwind CSS. Ideal para fotógrafos, designers e desenvolvedores.",
    image: "/vercel.svg",
    featured: true,
    stock: 75
  },
  {
    id: "5",
    name: "E-book - Guia de Design de UI",
    price: 39.90,
    category: "E-books",
    description: "Guia completo para iniciantes em design de interfaces.",
    detailedDescription: "Aprenda os fundamentos do design de UI, desde a teoria das cores até a criação de protótipos interativos. Um guia prático em formato PDF.",
    image: "/file.svg",
    featured: false,
    stock: 1000
  }
];

export const categories = [
  "Todos",
  "Design Assets", 
  "UI Kits",
  "Presets",
  "Templates",
  "E-books"
];

export const priceRanges = [
  { label: "Todos", min: 0, max: Infinity },
  { label: "Até R$ 50", min: 0, max: 50 },
  { label: "R$ 50 - R$ 100", min: 50, max: 100 },
  { label: "Acima de R$ 100", min: 100, max: Infinity }
];
