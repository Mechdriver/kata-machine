type Node<T> = { value: T; next?: Node<T> };

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item };

        if (!this.head) {
            this.head = this.tail = newNode;
            this.length = 1;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            this.length++;
        }
    }

    deque(): T | undefined {
        if (this.head) {
            const item = this.head;
            this.head = this.head.next;
            this.length--;

            if (this.length === 0) {
                this.tail = undefined;
            }

            return item.value;
        }
        return;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
