import { Pokemon } from './Pokemon';
import { GrassType, FireType, WaterType } from './MoveTypes';

const Bulbasaur = new Pokemon('Bulbasaur', 'Grass', 100 ,new GrassType);
Bulbasaur.attackAlgorithm();

const Charmander = new Pokemon('Charmander', 'Fire', 100 ,new FireType);
Charmander.attackAlgorithm();

const Squirtle = new Pokemon('Squirtle', 'Water', 100 ,new WaterType);
Squirtle.attackAlgorithm();