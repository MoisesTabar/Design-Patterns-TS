import { IMoveStrategy } from './MoveStrategy';

export class GrassType implements IMoveStrategy{
    public attack(): void{
        console.log('Grass type pokemon attacking');
    }
}

export class FireType implements IMoveStrategy{
    public attack(): void{
        console.log('Fire type pokemon attacking');
    }
}

export class WaterType implements IMoveStrategy{
    public attack(): void{
        console.log('Water type pokemon attacking');
    }
}