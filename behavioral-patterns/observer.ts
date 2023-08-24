// The Observer pattern is pretty common in TypeScript code, especially in the GUI components. It provides a way to react to events happening in other objects without coupling to their classes.

// The Observer interface declares the update method, used by subjects.
interface Observer {
  update(subject: Subject): void;
}

// The Subject interface declares a set of methods for managing subscribers.
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// The Subject owns some important state and notifies observers when the state changes.
export class ConcreteSubject implements Subject {
  public state!: number;
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  // Triggers an update in each subscriber
  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("Subject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

// Concrete Observers react to the updates issued by the Subject they had been attached to.
export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
