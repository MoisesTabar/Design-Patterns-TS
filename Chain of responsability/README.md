<h2>Chain of responsibility Pattern</h2>

<h4>Definition</h4>
<p>
    Chain of responsibility is a behavior pattern that allows you to pass requests over a chain of handlers. Each time a hanlder recieves a request, it decides if the request will be handled or if it will be passed to another handler of the chain.
</p>

<p>
    Chain of responsibility transforms particular behaviors into autonomous objects called handlers, each phase of the system needs to be inside of its own class, with an unique method that performs the verification. The request is a parameter of that function
</p>

<p>
    <b> Note: Each handler needs to have a reference to the other handler in case of success, if not it returns a message of error. The request needs to pass through each and every one handler. 
    </b>
    <code>PD: I'll be using npx instead of compiling the js code</code>
</p>
<hr>
<h3>
    We will be working with a request app, we will have different handlers depending on the request made, if the right handler gets the data, it will return a message
</h3>
