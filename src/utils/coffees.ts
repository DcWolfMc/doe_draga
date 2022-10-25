import Americano from '../assets/coffees/americano.svg'
import Arabe from '../assets/coffees/arabe.svg'
import CafeComLeite from '../assets/coffees/cafe-com-leite.svg'
import CafeGelado from '../assets/coffees/cafe-gelado.svg'
import Capuccino from '../assets/coffees/capuccino.svg'
import ChocolateQuente from '../assets/coffees/chocolate-quente.svg'
import Cubano from '../assets/coffees/cubano.svg'
import ExpressoCremoso from '../assets/coffees/expresso-cremoso.svg'
import Expresso from '../assets/coffees/expresso.svg'
import Havaiano from '../assets/coffees/havaiano.svg'
import Irlandes from '../assets/coffees/irlandes.svg'
import Latte from '../assets/coffees/latte.svg'
import Macchiato from '../assets/coffees/macchiato.svg'
import Mochaccino from '../assets/coffees/mochaccino.svg'

interface Coffee {
    description?: string;
    image: string;
    name: string;
    price: number
    tags?: string[];
    amount?: number;
}

export const Coffees: Array<Coffee> = [
    { name: 'Expresso Tradicional', image: Expresso, price: 9.90, description: 'O tradicional café feito com água quente e grãos moídos', tags: ['tradicional'] },

    { name: 'Expresso Americano', image: Americano, price: 9.90, description: 'Expresso diluído, menos intenso que o tradicional', tags: ['tradicional'] },

    { name: 'Expresso Cremoso', image: ExpressoCremoso, price: 9.90, description: 'Café expresso tradicional com espuma cremosa', tags: ['tradicional'] },

    { name: 'Expresso Gelado', image: CafeGelado, price: 9.90, description: 'Bebida preparada com café expresso e cubos de gelo', tags: ['tradicional', 'gelado'] },

    { name: 'Café com Leite', image: CafeComLeite, price: 9.90, description: 'Meio a meio de expresso tradicional com leite vaporizado', tags: ['tradicional', 'com leite'] },

    { name: 'Latte', image: Latte, price: 9.90, description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', tags: ['tradicional' , 'com leite'] },

    { name: 'Capuccino', image: Capuccino, price: 9.90, description: 'Bebida com canela feita de doses iguais de café, leite e espuma', tags: ['tradicional' , 'com leite'] },

    { name: 'Macchiato', image: Macchiato, price: 9.90, description: 'Café expresso misturado com um pouco de leite quente e espuma', tags: ['tradicional' , 'com leite'] },

    { name: 'Mocaccino', image: Mochaccino, price: 9.90, description: 'Café expresso com calda de chocolate, pouco leite e espuma', tags: ['tradicional' , 'com leite'] },

    { name: 'Chocolate Quente', image: ChocolateQuente, price: 9.90, description: 'Bebida feita com chocolate dissolvido no leite quente e café', tags: ['especial' , 'com leite'] },

    { name: 'Cubano', image: Cubano, price: 9.90, description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', tags: ['especial', 'gelado', 'alcoólico'] },

    { name: 'Havaiano', image: Havaiano, price: 9.90, description: 'Bebida adocicada preparada com café e leite de coco', tags: ['especial'] },

    { name: 'Árabe', image: Arabe, price: 9.90, description: 'Bebida preparada com grãos de café árabe e especiarias', tags: ['especial'] },

    { name: 'Irlandês', image: Irlandes, price: 9.90, description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', tags: ['especial', 'alcoólico'] },
]