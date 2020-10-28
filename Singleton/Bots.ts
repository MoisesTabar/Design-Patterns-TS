//We never want to use the class, just the single instance
class Bots{
    bots: Array<any>;
    //we need the instance to return the singleton which is the Bots
    static instance: Bots;

    constructor(){
        if(Bots.instance == null){
            this.bots = [];
            Bots.instance == this;
        }
        //now instead of returning a new instance we return the same instance
        return Bots.instance;
    }

    public storageBots(bot){
        this.bots.push(bot);
        console.log(`${bot} Storaged`);
        console.log('---------------------------------');
    }

    public printBotCount(){
        console.log(`Bots storaged: ${this.bots.length}`);
    }
}

//so here we just create the bot instance that will always execute
const botLogger = new Bots();
//we use object.freeze to make the object unchangable
Object.freeze(botLogger);
//finally we export the botlogger instance instead of the class
export default botLogger;