// Allows objects with incompatible interfaces to collaborate.

// The Target defines the domain-specific interface used by the client code.
export class Target {
  public request(): string {
    return "Target";
  }
}

// The Adaptee contains some useful behavior, but its interface is incompatible with the existing client code.
export class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

// The Adapter makes the Adaptee's interface compatible with the Target's interface.
export class Adapter extends Target {
  private adaptee!: Adaptee;
  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }
  // Usage of adaptee in target interface.
  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}\n`;
  }
}

export function clientCode(target: Target) {
  console.log(target.request());
}
