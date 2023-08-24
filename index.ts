/********* Creational Patterns *********/
import * as FactoryMethod from "./creational-patterns/factory-method";
import * as AbstractFactory from "./creational-patterns/abstract-factory";
import * as Builder from "./creational-patterns/builder";
import * as Singleton from "./creational-patterns/singleton";

// Factory Method - Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
FactoryMethod.clientCode(new FactoryMethod.ConcreteCreator1());
FactoryMethod.clientCode(new FactoryMethod.ConcreteCreator2());

// Abstract Factory - Lets you produce families of related objects without specifying their concrete classes.
AbstractFactory.clientCode(new AbstractFactory.Outfit1());
AbstractFactory.clientCode(new AbstractFactory.Outfit2());

// Builder - Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
Builder.clientCode(new Builder.Director());

// Singleton - Singleton can be recognized by a static creation method, which returns the same cached object.
Singleton.clientCode();

/********* Structural Patterns *********/
import * as Adapter from "./structural-patterns/adapter";
import * as Composite from "./structural-patterns/composite";
import * as Decorator from "./structural-patterns/decorator";
import * as Facade from "./structural-patterns/facade";

// Adapter
console.log(new Adapter.Target().request());
const adaptee = new Adapter.Adaptee();
console.log(adaptee.specificRequest());
console.log(new Adapter.Adapter(adaptee).request());

// Composite
// Simple
const simple = new Composite.Leaf();
Composite.clientCode1(simple);

// Tree with branch
const tree = new Composite.Composite();
const branch1 = new Composite.Composite();

branch1.add(new Composite.Leaf());
branch1.add(new Composite.Leaf());

const branch2 = new Composite.Composite();
branch2.add(new Composite.Leaf());

tree.add(branch1);
tree.add(branch2);

Composite.clientCode1(tree);

Composite.clientCode2(tree, simple);

// Decorator
// Simple
const simpleDecorator = new Decorator.ConcreteComponent();
Decorator.clientCode(simpleDecorator);

// Decorators can wrap not only simple components but the other decorators as well.
const decorator1 = new Decorator.ConcreteDecoratorA(simpleDecorator);
const decorator2 = new Decorator.ConcreteDecoratorB(decorator1);

Decorator.clientCode(decorator2);

// Facade
const subsystem1 = new Facade.Subsystem1();
const subsystem2 = new Facade.Subsystem2();
const facade1 = new Facade.Facade(subsystem1, subsystem2);
Facade.clientCode(facade1);

console.log("\n");

const facade2 = new Facade.Facade();
Facade.clientCode(facade2);

/********* Behavioral Patterns *********/
import * as Command from "./behavioral-patterns/command";
import * as Iterator from "./behavioral-patterns/iterator";
import * as Mediator from "./behavioral-patterns/mediator";
import * as Observer from "./behavioral-patterns/observer";
import * as Strategy from "./behavioral-patterns/strategy";
import * as State from "./behavioral-patterns/state";
import * as Template from "./behavioral-patterns/template-method";

// Command
const invoker = new Command.Invoker();
invoker.setOnStart(new Command.SimpleCommand("Say Hi!"));
const receiver = new Command.Receiver();
invoker.setOnFinish(
  new Command.ComplexCommand(receiver, "Send email", "Save report")
);
invoker.doSomethingImportant();

// Iterator
const collection = new Iterator.WordsCollection();
collection.addItem("Apple");
collection.addItem("Banana");
collection.addItem("Cherry");

const iterator = collection.getIterator();
while (iterator.valid()) {
  console.log(iterator.current());
  iterator.next();
}

const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.current());
  reverseIterator.next();
}
console.log("\n");

// Mediator
const c1 = new Mediator.Component1();
const c2 = new Mediator.Component2();
new Mediator.ConcreteMediator(c1, c2);

c1.doA();

c2.doD();

console.log("\n");

// Observer
const subject = new Observer.ConcreteSubject();
const observer1 = new Observer.ConcreteObserverA();
subject.attach(observer1);

const observer2 = new Observer.ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();

console.log("\n");

// Strategy
const context = new Strategy.Context(new Strategy.ConcreteStrategyA());
context.doSomeBusinessLogic();

context.setStrategy(new Strategy.ConcreteStrategyB());
context.doSomeBusinessLogic();

console.log("\n");

// State
const stateContext = new State.Context(new State.ConcreteStateA());
stateContext.request1();
stateContext.request2();
console.log("\n");

// Template Method
Template.clientCode(new Template.ConcreteClass1());
Template.clientCode(new Template.ConcreteClass2());
