const readline = require('readline');

interface State{
    transaction: Transaction;
    
    verification();
    cancelation();
    performing();
}

class Transaction{

    public performingTransaction: State;
    public verifyingTransaction: State;
    public cancelationTransaction: State;
    
    //we need to initialize the states of the transaction in a constructor
    constructor(){
        this.performingTransaction = new performingState(this);
        this.verifyingTransaction = new verificationState(this);
        this.cancelationTransaction = new cancelationState(this);

        //when we initialize a transaction it will be verifying the transaction 
        this.setState(this.performingTransaction);
    }

    public currentState: State;

    public setState(state: State){
        this.currentState = state;
    }

    public getState(): State{
        return this.currentState;
    }
}

//when we are in a bank the bank administrator or the ATM needs to procces our transaction method
class verificationState implements State{

    transaction: Transaction;

    constructor(transaction: Transaction){
        this.transaction = transaction;
    }

    verification(){
        console.log('Transaction verified');
        this.transaction.setState(this.transaction.verifyingTransaction);
    }

    //when we cancel the transaction the state will become cancelled
    cancelation() {
        console.log('Cancelling the transaction');
        this.transaction.setState(this.transaction.cancelationTransaction);
    }

    performing(){
        console.log('The transaction is being verified already');
    }

}

//if we want to cancel the transaction we can go back
class cancelationState implements State{

    transaction: Transaction;

    constructor(transaction: Transaction){
        this.transaction = transaction;
    }

    verification() {
        console.log('');
    }

    cancelation() {
        console.log('The transaction has been cancelled already');
    }

    performing() {
        console.log('')
    }

}

//the performed state, when rollback is impossible
class performingState implements State{

    transaction: Transaction;

    constructor(transaction: Transaction){
        this.transaction = transaction;
    }

    verification() {
        console.log('Perform the transaction please');
    }

    cancelation() {
        const cancellingInput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        cancellingInput.question('You want to cancel? [y/N] ', (answer) => {
            if(answer == 'y'){
                this.transaction.setState(this.transaction.cancelationTransaction);
            }
            else if(answer == 'n'){
                this.transaction.setState(this.transaction.performingTransaction);
            }
        });
    }

    performing() {
        const numberInput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        numberInput.question('Please enter the amount of money', (answer) => {
            console.log(`${answer} is the amount of money`);
            numberInput.close();
        });
        
        this.transaction.setState(this.transaction.performingTransaction);
    }

}

const transaction = new Transaction();
console.log('Transaction begins');
transaction.getState().cancelation();
transaction.getState().performing();
transaction.getState().verification();