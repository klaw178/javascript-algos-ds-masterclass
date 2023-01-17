class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
        } else {
            let curr = this.root;
            while (true) {
                if (node.val === curr.val) return undefined;
                if (node.val < curr.val) {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = node;
                        break;
                    }
                } else {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = node;
                        break;
                    }
                }
            }
        }
        console.log(this);
        return this;
    }

    find(val) {
        if (!this.root) return undefined;
        let curr = this.root;
        while (true) {
            if (val < curr.val) {
                if (curr.left) {
                    curr = curr.left;
                } else return undefined;
            } else if (val > curr.val) {
                if (curr.right) {
                    curr = curr.right;
                } else return undefined;
            } else if (val === curr.val) return curr;
        }
    }

    bfs() {
        if (!this.root) return null;
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let curr = queue[0];
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            visited.push(queue.shift().val);
        }
        return visited;
    }
    // time complexity are the same
    // bfs works better when there are fewer nodes to keep track of 
    // as the tree grows horizontally, the queue grows and increase space complexity
    // dfs utilizes recursion and keeps track of one node per stack and performs better in horizontal tree
    // but it declines when the tree is very deep which means keeping more nodes and more stacks
    dfsPreOrder() {
        if (!this.root) return null;
        let visited = [];
        let curr = this.root;
        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(curr);
        return visited;
    }
    // used to export a tree structure for further reconstruction/ cloning it
    dfsPostOrder() {
        if (!this.root) return null;
        let visited = [];
        let curr = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(curr);
        return visited;
    }

    dfsInOrder() {
        if (!this.root) return null;
        let visited = [];
        let curr = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(curr);
        return visited;
    }
    // used commonly with bst because nodes captured are actually in-order

}

let bst = new BinarySearchTree();

bst.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

bst.find(20);

bst.bfs();

bst.dfsInOrder();