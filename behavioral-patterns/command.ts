/* The Command pattern is pretty common in TypeScript code. Most often it’s used as an alternative for callbacks to parameterizing UI elements with actions. It’s also used for queueing tasks, tracking operations history, etc. */

interface Command {
  execute(): void;
}

// The Receiver classes contain some important business logic.
export class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)\n`);
  }
}

// Some commands can implement simple operations on their own.
export class SimpleCommand implements Command {
  private payload: String;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`
    );
  }
}

// However, some commands can delegate more complex operations to other objects, called "receivers."

export class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }
  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

// The Invoker is associated with one or several commands.

export class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }
  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }
  private isCommand(object: Command): object is Command {
    return object.execute !== undefined;
  }
  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }
}
