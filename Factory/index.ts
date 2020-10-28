/*
*We need the manufacturer abstract class or interface that returns
*an object of a Console class
*/

abstract class Manufacturer{
    /*
    *have in mind that this factory called produceConsoles() only contains logic
    *that relies on Console objects. Subclasses can have their own logic too by overriding these method
    */

    public abstract produceConsoles(): NewConsole;

    public defineManufacturer(): any{
        const console = this.produceConsoles();
        return console.operation();
    }
} 

/*
* now we have concrete manufacturers that override the produceConsoles method
*/
class SonyManufacturer extends Manufacturer{

    public produceConsoles(): NewConsole{
        return new PlaystationConsole();
    }
}

class MicrosoftManufacturer extends Manufacturer{

    public produceConsoles(): NewConsole{
        return new  XboxConsole();
    }
}

/*
* now we have the console abstract class 
*/
abstract class NewConsole{
    public name: string;
    public processor: string;
    public colors: Array<string>;
    public storage: number;

    public abstract operation(): any;
}

/*
* A concrete console produces various implementation of the Console abstract class
*/
class PlaystationConsole extends NewConsole{
    console = {
        name: 'Playstation4',
        processor: 'AMD “Jaguar”, 8 cores GPU : 1.84 TFLOPS, AMD Radeon™ based graphics engine',
        colors: ['Black', 'Chrome Black'],
        storage: 500 
    }

    public operation(): any{
        return this.console; 
    }
}

class XboxConsole extends NewConsole{
    console = {
        name: 'XboxOne',
        processor: 'AMD-customized Jaguar Evolved',
        colors: ['White', 'White-Green'],
        storage: 500,
    }

    public operation(): any{
        return this.console;
    }
}

/*
* Client code 
*/

const clientCode = (manufacturer: Manufacturer) => {
    console.log(manufacturer.defineManufacturer());
} 

//here we are just using the new operator to call a manufacturer that creates a new console
clientCode(new SonyManufacturer);
clientCode(new MicrosoftManufacturer);
