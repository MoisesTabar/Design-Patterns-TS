<h2>State Pattern</h2>

<h4>Definition</h4>
<p>Is a behavioral pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class</p>

<p>This pattern bases on the idea that there is a finite number of states which a program can be in. Within any state the program behaves differently and has the ability to change of state in an instant</p>

<p>
<b> Note: Like when we use the strategy pattern, when we use the state pattern the use of switch statement becomes 0. The state pattern suggest that we can create new classes for all possible states of an object.
</b>
</p>
<hr>
<h3>
    We will be working with a bank app, that will process a transaction in different states: performing, verification and cancelation 
</h3>