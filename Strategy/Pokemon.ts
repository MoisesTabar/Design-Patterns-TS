import { IMoveStrategy } from './MoveStrategy';

export class Pokemon{
    public name: string;
    public type: string;
    public health: number;
    public move: IMoveStrategy;

    constructor(name: string, type: string, health: number, move: IMoveStrategy){
        this.name = name;
        this.type = type;
        this.move = move;
        this.health = health;
    }

    attackAlgorithm():void{
        console.log(`${this.name} has been choosed, its a ${this.type} type Pokemon has ${this.health} haatlh points`);
        
        this.move.attack();
    }
}
