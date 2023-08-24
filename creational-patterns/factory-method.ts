interface Product {
  operation(): string;
}

//The Creator class declares the factory method that is supposed to return an object of a Product class.
abstract class Creator {
  abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

// Concrete Products provide various implementations of the Product interface.
class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of ConcreteProduct1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of ConcreteProduct2}";
  }
}

// Subclass -> Allows subclass to alter factory method.
export class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

// Pass any creator's subclass.
export function clientCode(creator: Creator) {
  console.log(creator.someOperation());
  console.log("\n");
}
