import { Advisor } from './Asesor';
import { King } from './Rey';
import { Fighter } from './Luchador';
import { Squire } from './Escudero';

export const characters: Any[] = [];

characters.push(new King('Joffrey Baratheon', 'Lannister', 12, true, 1));
characters.push(
  new Fighter('Jaime Lannister', 'Lannister', 20, true, 'Sword', 9)
);
characters.push(
  new Fighter('Daenerys Targaryen', 'Targaryan', 20, true, 'fire', 3)
);
characters.push(
  new Advisor('Tyrion Lannister', 'Lannister', 20, true, 'Daenerys')
);
characters.push(
  new Squire('Bronn', 'High Garden', 30, true, 'Jaime Lannister', 9)
);
