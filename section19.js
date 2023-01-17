class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let curr = this.head;
        let newTail = this.head;
        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx >= this.length || idx < 0) return null;
        let counter = 0;
        let curr = this.head;
        while (counter !== idx) {
            curr = curr.next;
            counter++;
        }
        return curr;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node) {
            node.val = val;
            return true;
        } else return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx === this.length) {
            this.push(val);
        } else if (idx === 0) {
            this.unshift(val)
        } else {
            let node = new Node(val);
            let prev = this.get(idx - 1);
            node.next = prev.next;
            prev.next = node; // if line 100 before 99, the list will be changed and all the nodes followed prev will be erased, causing self-referencing
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prev = this.get(idx - 1);
        let curr = prev.next;
        prev.next = curr.next;
        this.length--
        return curr;
    }

    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next
        }
        console.log(arr);
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(0);
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.reverse();
singlyLinkedList.print();

