/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { Advisor } from '../models/Advicer';
import { King } from '../models/King';
import { Fighter } from '../models/Fighter';
import { Squire } from '../models/Squire';

export const characters: any[] = [];

characters.push(new King('Joffrey Baratheon', 'Lannister', 12, 1));
characters.push(new Fighter('Jaime Lannister', 'Lannister', 20, 'Sword', 9));
characters.push(new Fighter('Daenerys Targaryen', 'Targaryan', 20, 'fire', 3));
characters.push(
  new Advisor('Tyrion Lannister', 'Lannister', 20, characters[2])
);

characters.push(new Squire('Bronn', 'High Garden', 30, characters[1], 9));

console.log(characters);
