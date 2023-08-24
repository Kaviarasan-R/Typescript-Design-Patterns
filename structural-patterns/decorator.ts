// Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
// The Decorator is pretty standard in TypeScript code, especially in code related to streams.

interface Component {
  operation(): string;
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

export class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

export class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

export class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

export function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}\n`);
}
