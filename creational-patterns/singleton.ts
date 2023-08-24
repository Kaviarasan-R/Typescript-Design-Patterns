// The Singleton class defines the `getInstance` method that lets clients access the unique singleton instance.

class Singleton1 {
  private static instance: Singleton1;
  public static getInstance(): Singleton1 {
    if (!Singleton1.instance) {
      this.instance = new Singleton1();
    }
    return Singleton1.instance;
  }
}

class Singleton2 {
  private static instance: Singleton2;
  public static getInstance(): Singleton2 {
    if (!Singleton2.instance) {
      this.instance = new Singleton2();
    }
    return Singleton2.instance;
  }
}

export function clientCode() {
  const s1 = Singleton1.getInstance();
  const s2 = Singleton2.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.\n");
  } else {
    console.log("Singleton failed, variables contain different instances.\n");
  }
}
