// Allows you to defines a skeleton of an algorithm in a base class and let subclasses override the steps without changing the overall algorithm’s structure.

abstract class AbstractClass {
  // The template method defines the skeleton of an algorithm.

  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  // These operations already have implementations.
  protected baseOperation1(): void {
    console.log("AbstractClass says: I am doing the bulk of the work");
  }

  protected baseOperation2(): void {
    console.log(
      "AbstractClass says: But I let subclasses override some operations"
    );
  }

  protected baseOperation3(): void {
    console.log(
      "AbstractClass says: But I am doing the bulk of the work anyway"
    );
  }

  // These operations have to be implemented in subclasses.

  protected abstract requiredOperations1(): void;

  protected abstract requiredOperation2(): void;

  // These are "hooks." Subclasses may override them, but it's not mandatory.

  protected hook1(): void {}

  protected hook2(): void {}
}

export class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass1 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass1 says: Implemented Operation2");
  }
}

export class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  protected hook1(): void {
    console.log("ConcreteClass2 says: Overridden Hook1");
  }
}

export function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}
