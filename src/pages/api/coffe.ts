// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Coffe from '../../types/Coffe'

type Data = {
  coffeList: Coffe[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const coffeList: Coffe[] = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      price: 9.9,
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: 'https://i.ibb.co/t38VNHm/expresso-tradicional.jpg',
      tags: ["Tradicional"]
    },
    {
      id: 2,
      name: 'Expresso Americano',
      price: 9.9,
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: 'https://i.ibb.co/crTSXF9/expresso-americano.jpg',
      tags: ["Tradicional"]
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      price: 9.9,
      description: 'Café expresso tradicional com espuma cremosa',
      image: 'https://i.ibb.co/HqxmDqB/expresso-cremoso.jpg',
      tags: ["Tradicional"]
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      price: 9.9,
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: 'https://i.ibb.co/NW3HQN4/expresso-gelado.jpg',
      tags: ["Tradicional", "Gelado"]
    },
    {
      id: 4,
      name: 'Café com Leite',
      price: 9.9,
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: 'https://i.ibb.co/P99JRvk/Caf-com-Leite.jpg',
      tags: ["Tradicional", "Com Leite"]
    },
    {
      id: 5,
      name: 'Latte',
      price: 9.9,
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: 'https://i.ibb.co/rwzcv34/Latte.jpg',
      tags: ["Tradicional", "Com Leite"]
    },
    {
      id: 6,
      name: 'Cappuccino',
      price: 12.5,
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: 'https://i.ibb.co/R9hRK5G/Capuccino.jpg',
      tags: ["Tradicional", "Canela", "Com leite"]
    },
    {
      id: 7,
      name: 'Macchiato',
      price: 12.5,
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      image: 'https://i.ibb.co/S5827j3/Macchiato.jpg',
      tags: ["Tradicional", "Canela", "Com leite"]
    },
    {
      id: 8,
      name: 'Mocaccino',
      price: 12.5,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: 'https://i.ibb.co/d4GncBF/Mocaccino.jpg',
      tags: ["Tradicional", "Canela", "Com leite"]
    },
    {
      id: 9,
      name: 'Chocolate Quente',
      price: 12.5,
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      image: 'https://i.ibb.co/Y8Jc0rr/chocolate-quente.jpg',
      tags: ["Especial", "Com leite"]
    },
    {
      id: 10,
      name: 'Cubano',
      price: 13.5,
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: 'https://i.ibb.co/BZxXkv7/cubano.jpg',
      tags: ["Especial", "Alcoólico", "Com leite"]
    },
    {
      id: 11,
      name: 'Havaiano',
      price: 15.5,
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: 'https://i.ibb.co/LRnMQ6S/havaiano.jpg',
      tags: ["Especial"]
    },
    {
      id: 12,
      name: 'Árabe',
      price: 15.5,
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      image: 'https://i.ibb.co/VMhJwLQ/arabe.jpg',
      tags: ["Especial"]
    },
    {
      id: 12,
      name: 'Irlandês',
      price: 15.5,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      image: 'https://i.ibb.co/1XmBtMh/irlandes.jpg',
      tags: ["Especial", "Alcoólico"]
    },

  ]

  res.status(200).json({coffeList})
}
