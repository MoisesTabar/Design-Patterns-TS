//this class will work as a notifier of the sale to the observers
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    //the attachObserver function will be the one to add observers to the array
    Observable.prototype.attachObserver = function (obs) {
        this.observers.push(obs);
    };
    //the notify function will do the work of notifying the observers of the sail
    Observable.prototype.notify = function () {
        console.log('Notifying observers');
        this.observers.map(function (observer) { return observer.sendMail(); });
        //the observer variable that is inside the map uses the type IOobserver of the observers
    };
    return Observable;
}());
//this class will work as the observers
var Observers = /** @class */ (function () {
    function Observers(name, email) {
        this.name = name;
        this.email = email;
    }
    Observers.prototype.sendMail = function () {
        console.log("sending mail to " + this.name + "\uD83D\uDC66\uD83C\uDFFE");
        this.email = "One month away from black friday " + this.name + ", begin filling your cart!";
        console.log("" + this.email);
    };
    return Observers;
}());
//creating the sale
var Sale = new Observable();
//creating the clients
var clientOne = new Observers('Mike', 'MikeTheBest@mail.com');
var clientTwo = new Observers('Mariah', 'MariahOne@mail.com');
var clientThree = new Observers('Tyson', 'TyBeast@mail.com');
//adding the clients
Sale.attachObserver(clientOne);
Sale.attachObserver(clientTwo);
Sale.attachObserver(clientThree);
//notifying the clients
Sale.notify();
