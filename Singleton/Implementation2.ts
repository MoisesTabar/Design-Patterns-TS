import botLogger from "./Bots"
//if we have another implementation of the Bots class, the method will override 
//and the information we entered will be renovated

export default function implementation2(){
    botLogger.storageBots('Bot two');
    botLogger.printBotCount();
}