type Node<T> = { value: T; prev?: Node<T> };

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode: Node<T> = { value: item };

        if (this.length > 0) {
            newNode.prev = this.head;
        }

        this.head = newNode;
        this.length++;
    }
    pop(): T | undefined {
        const returnVal = this.peek();

        this.head = this.head?.prev;

        if (this.length > 0) this.length--;

        return returnVal;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
