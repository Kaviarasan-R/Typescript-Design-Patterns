// Lets you compose objects into tree structures and then work with these structures as if they were individual objects.

// The base Component class declares common operations for both simple and complex objects of a composition.
abstract class Component {
  protected parent!: Component | null;
  public abstract operation(): string;
  public setParent(parent: Component | null) {
    this.parent = parent;
  }
  public getParent(): Component | null {
    return this.parent;
  }
  public add(component: Component): void {}
  public remove(component: Component): void {}

  // You can provide a method that lets the client code figure out whether a component can bear children.
  public isComposite(): boolean {
    return false;
  }
}

// The Leaf class represents the end objects of a composition.
export class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

// The Composite class represents the complex components that may have children.
export class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

export function clientCode1(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

export function clientCode2(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}\n`);
}
