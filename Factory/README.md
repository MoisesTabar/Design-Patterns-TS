<h2>Factory Pattern</h2>

<h4>Definition</h4>
<p>
    Factory is a creational pattern that solves the problem of creating objects without specifying their concrete classes. This pattern defines a method that needs to be used to create objects instead of a direct call to the constructor(using the <code>new</code> operator)
</p>

<p>
    The factory is the one to hold all the logic of creation of something of a particular shared type. In simple words the factory is the one responsible to have the different mechanisms of creation
</p>

<p>
    The book <b>Head first design patterns</b> defines factory as the following: <i> The factory method pattern defines an interface for creating an object, but let's sub-classes decide which class to instantiate.</i>
</p>

<p>
    <b>Note: This pattern uses polymorphism, if you have a factory that wraps your construction and if that Factory is an instance, then you can swap that instance for an instance of another factory
    </b>
<p>

<hr>
<h3>
    We will be working with a videogame consoles app, that will have a manufacturer that will produce consoles and a concrete console that will have a concrete manufacturer
</h3>
