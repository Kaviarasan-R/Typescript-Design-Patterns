// Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

interface Iterator<T> {
  current(): T;
  next(): IteratorResult<T>;
  valid(): boolean;
  rewind(): void;
}

interface Aggregator {
  getIterator(): Iterator<string>;
}

export class WordsCollection implements Aggregator {
  private items: string[] = [];

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getItems(): string[] {
    return this.items;
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;
  private position: number = 0;
  private reverse: boolean;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;
    this.position = reverse ? collection.getItems().length - 1 : 0;
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getItems().length - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public next(): IteratorResult<string> {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return { value: item, done: this.valid() };
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getItems().length;
  }
}
