// It’s often used in various frameworks to provide users a way to change the behavior of a class without extending it.
//  turns a set of behaviors into objects and makes them interchangeable inside original context object.

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

export class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

export class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}
