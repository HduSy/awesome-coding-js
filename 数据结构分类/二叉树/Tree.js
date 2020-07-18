function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.prototype = {
    show: function () {
        console.log(this.data);
    }
}

function Tree() {
    this.root = null;
}

Tree.prototype = {
    insert: function (data) {
        let node = new Node(data, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        let parent = null;
        while (current) {
            parent = current;
            if (data < parent.data) {
                current = current.left;
                if (!current) {
                    parent.left = node;
                    return;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = node;
                    return;
                }
            }

        }
    },
    preOrder: function (node) {
        if (node) {
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    middleOrder: function (node) {
        if (node) {
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    },
    laterOrder: function (node) {
        if (node) {
            this.laterOrder(node.left);
            this.laterOrder(node.right);
            node.show();
        }
    },
    getMin: function () {
        let current = this.root;
        while (current) {
            if (!current.left) {
                return current;
            }
            current = current.left;
        }
    },
    getMax: function () {
        let current = this.root;
        while (current) {
            if (!current.right) {
                return current;
            }
            current = current.right;
        }
    },
    getDeep: function (node, deep) {
        deep = deep || 0;
        if (node == null) {
            return deep;
        }
        deep++;
        let dleft = this.getDeep(node.left, deep);
        let dright = this.getDeep(node.right, deep);
        return Math.max(dleft, dright);
    },
    getNode: function (data, node) {
        if (node) {
            if (data === node.data) {
                return node
            } else if (data < node.data) {
                return this.getNode(data, node.left)
            } else {
                return this.getNode(data, node.right)
            }
        } else {
            return null
        }
    }
}

let t = new Tree()
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(2)
t.insert(5)
t.insert(7)
t.insert(6)
t.insert(0)
console.log(t.root)
console.log(t.preOrder(t.root))
console.log(t.getMax())
console.log(t.getNode(5, t.root))
