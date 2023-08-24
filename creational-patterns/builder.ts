// The Builder interface specifies methods for creating the different parts of the Product objects.
interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class Product {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product;
  constructor() {
    this.reset();
  }
  public reset(): void {
    this.product = new Product();
  }
  producePartA(): void {
    this.product.parts.push("Part 1");
  }
  producePartB(): void {
    this.product.parts.push("Part 2");
  }
  producePartC(): void {
    this.product.parts.push("Part 3");
  }
  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder!: Builder;
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }
  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

export function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}
