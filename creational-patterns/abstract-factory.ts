// The Abstract Factory interface declares a set of methods that return different abstract products

// Product A
interface TShirt {
  wearTShirt(): string;
}

class TShirt1 implements TShirt {
  wearTShirt(): string {
    return "T-shirt 1.";
  }
}

class TShirt2 implements TShirt {
  wearTShirt(): string {
    return "T-shirt 2.";
  }
}

// Product B is able to do its own thing but it also can collaborate with the ProductA.
interface Denim {
  wearDenim(): string;
  wearWithTShirt(collaborator: TShirt): string;
}

class Denim1 implements Denim {
  wearDenim(): string {
    return "Denim 1.";
  }

  wearWithTShirt(collaborator: TShirt): string {
    const result = collaborator.wearTShirt();
    return `Denim 1 + ${result}`;
  }
}

class Denim2 implements Denim {
  wearDenim(): string {
    return "Denim 2.";
  }

  wearWithTShirt(collaborator: TShirt): string {
    const result = collaborator.wearTShirt();
    return `Denim 2 + ${result}`;
  }
}

// A family of products may have several variants, but the products of one variant are incompatible with products of another.
interface Wear {
  tShirt(): TShirt;
  denim(): Denim;
}

export class Outfit1 implements Wear {
  tShirt(): TShirt {
    return new TShirt1();
  }
  denim(): Denim {
    return new Denim1();
  }
}

export class Outfit2 implements Wear {
  tShirt(): TShirt {
    return new TShirt2();
  }
  denim(): Denim {
    return new Denim2();
  }
}

// The client code works with factories and products only through abstract types: Wear & AbstractProduct.
export function clientCode(factory: Wear) {
  const tshirt = factory.tShirt();
  const denim = factory.denim();

  console.log(tshirt.wearTShirt());
  console.log(denim.wearDenim());
  console.log(denim.wearWithTShirt(tshirt));
  console.log("\n");
}
