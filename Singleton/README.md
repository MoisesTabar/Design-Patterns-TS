<h2>Singleton Pattern</h2>

<h4>Definition</h4>
<p>
    Singleton makes sure a class has only one instace and provides an only point of access. This means that is imposible to instanciate that class except for a single time. Only a singleton can instanciate singletons
</p>

<p>
    <b>Note: A lot of people believe that the singleton pattern is a code smell and that we shouldn't use it, but also is interesting how the mechanism of this pattern works, that is why is useful to take a look of it
    </b>
</p>
<hr>
<h3>
    We will be working with a bot storage app, that will only have a single class with is the singleton, it will have a static insance in the constructor
</h3>
