type Node<T> = { value: T; prev?: Node<T>; next?: Node<T> };

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = this.tail = newNode;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of range!");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        const currNode = this.getAt(idx) as Node<T>;

        const newNode = {
            value: item,
            prev: currNode.prev,
            next: currNode,
        };

        if (currNode.prev) {
            currNode.prev.next = newNode;
        }

        currNode.prev = newNode;
        this.length++;
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        let currNode = this.head;

        while (currNode && currNode?.value !== item) currNode = currNode?.next;

        if (!currNode) {
            return undefined;
        }

        return this.removeNode(currNode);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const currNode = this.getAt(idx);

        if (!currNode) {
            return;
        }

        return this.removeNode(currNode);
    }

    private removeNode(currNode: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const result = this.head?.value;
            this.head = this.tail = undefined;
            return result;
        }

        if (currNode.prev) currNode.prev.next = currNode.next;
        if (currNode.next) currNode.next.prev = currNode.prev;

        if (currNode === this.head) {
            this.head = currNode.next as Node<T>;
            this.head.prev = undefined;
        }

        if (currNode === this.tail) {
            this.tail = currNode.prev as Node<T>;
            this.tail.next = undefined;
        }

        currNode.prev = currNode.next = undefined;

        return currNode.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of range!");
        }

        let currNode = this.head;
        for (let i = 0; currNode && i < idx; i++) {
            currNode = currNode.next;
        }

        return currNode;
    }
}
