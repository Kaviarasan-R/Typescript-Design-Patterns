// Provides a simplified interface to a library, a framework, or any other complex set of classes.
// The client code may have some of the subsystem's objects already created. In this case, it might be worthwhile to initialize the Facade with these objects instead of letting the Facade create new instances.

export class Subsystem1 {
  public operation1(): string {
    return "Subsystem1: Ready!\n";
  }
  public operationN(): string {
    return "Subsystem1: Go!\n";
  }
}

export class Subsystem2 {
  public operation1(): string {
    return "Subsystem2: Get ready!\n";
  }
  public operationZ(): string {
    return "Subsystem2: Fire!";
  }
}

export class Facade {
  protected subsystem1: Subsystem1;

  protected subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }
  public operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += "Facade orders subsystems to perform the action:\n";
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}

export function clientCode(facade: Facade) {
  console.log(facade.operation() + "\n");
}
