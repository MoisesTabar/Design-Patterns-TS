//this abstract class will hold the methods that the other subclasses will have
abstract class Product{
    public description: string;
    public abstract getDescription():string

    public cost: number;
    public abstract getCost():number
}

//now we define the decorator, this decorator is a Product and has Product.
//this is the main wrapper, but it is also optional you can just move to the different decorators
abstract class Decorator extends Product{
    getDescription():string{
        return this.description;
    }
    getCost():number{
        return this.cost
    }
}

//then with the decorator we will define the specific characteristics that can be used in concrete products
//These are the secondary wrappers, but these wrappers may change
class strawberryDecorator extends Decorator{
    getDescription(): string{
        return ' also with strawberries';
    }

    getCost(): number{
        return 5;
    }
}
class germanyDecorator extends Decorator{
    getDescription(): string{
        return ' also coming from germany';
    }

    getCost(): number{
        return 15;
    }
}

/*
 *Instead of having a single class defining if a type of product is different
 *we design one decorator to communicate with the different characteristics and assining
 *them to an specific product we will see this example below
 */

 //these classes are the base line classes
 class Yogurt extends Product{
    getDescription():string{
        return 'Quality yogurt with deep flavor' + strawberryDecorator.prototype.getDescription()
    }
    getCost():number{
        return 15 + strawberryDecorator.prototype.getCost();
    }
 }

 class Beer extends Product{
    getDescription():string{
        return 'Quality beer with freshing feeling' + germanyDecorator.prototype.getDescription()
    }
    getCost():number{
        return 25 + germanyDecorator.prototype.getCost();
    }
 }

//implementation
const strawberryYogurt = new Yogurt()
const germanyBeer = new Beer()

console.log(strawberryYogurt.getDescription())
console.log(strawberryYogurt.getCost())

console.log(germanyBeer.getDescription())
console.log(germanyBeer.getCost())
