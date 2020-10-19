//this interface will be the one to notify the users by sending a Mail
interface IObserver{
    sendMail(): void
}

//this class will work as a notifier of the sale to the observers
class Observable{
    //the other observers will have the type IObserver as an array
    public observers: IObserver[];

    constructor(){
        this.observers = []
    }

    //the attachObserver function will be the one to add observers to the array
    attachObserver(obs: IObserver){
        this.observers.push(obs)
    }

    //the notify function will do the work of notifying the observers of the sail
    notify(){
        console.log('Notifying observers')
        this.observers.map((observer) => observer.sendMail())
        //the observer variable that is inside the map uses the type IOobserver of the observers
    }
}

//this class will work as the observers
class Observers implements IObserver{
    private name: string
    private email: string

    constructor(name: string, email: string){
        this.name = name;
        this.email = email
    }

    sendMail():void{
        console.log(`sending mail to ${this.name}👦🏾`)
        this.email = `One month away from black friday ${this.name}, begin filling your cart!`
        console.log(`${this.email}`)
    }
}

//creating the sale
const Sale = new Observable()
//creating the clients
const clientOne = new Observers('Mike', 'MikeTheBest@mail.com')    
const clientTwo = new Observers('Mariah', 'MariahOne@mail.com')
const clientThree = new Observers('Tyson', 'TyBeast@mail.com')
//adding the clients
Sale.attachObserver(clientOne)
Sale.attachObserver(clientTwo)
Sale.attachObserver(clientThree)

//notifying the clients
Sale.notify()

