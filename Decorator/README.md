<h2>Decorator Pattern</h2>

<h4>Definition</h4>
<p>
    Decorator is an estructural pattern that allows the addition of new behaviors to objects and putting them inside special objects that decorate them. These objects are usually called wrappers or decorators. Decorators attach different characteristics to the main object dynamically(in runtime).
</p>

<p>
    <b> 
    Note: The decorator or wrapper is a class or component that surrounds the main class or component. But can be also surrounded by another decorator, so in this case we can use the phrase: 
    has a decorator and is a decorator.
    </b>
<p>

<hr>
<h3>
    We will be working with a market app, that will have many products with differents attributes and prices, but depending on which object will decorate these attributes will change.
</h3>