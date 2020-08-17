function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

Node.prototype = {
    show: function () {
        console.log(this.val);
    }
}

function Tree() {
    this.root = null;
}

/**
 * 构造二叉搜索树
 */
Tree.prototype = {
    insert: function (val) {
        let node = new Node(val, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        let parent = null; //除根节点外无父节点
        while (current) {
            parent = current;
            if (val < parent.val) {
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
    getNode: function (val, node) {
        if (node) {
            if (val === node.val) {
                return node
            } else if (val < node.val) {
                return this.getNode(val, node.left)
            } else {
                return this.getNode(val, node.right)
            }
        } else {
            return null
        }
    }
}
// Tree用法
let t = new Tree()
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(2)
t.insert(5)
t.insert(7)
t.insert(6)
t.insert(0)
// console.log(t.root)
// console.log(t.preOrder(t.root))
// console.log(t.getMax())
// console.log(t.getNode(5, t.root))

exports.Tree = Tree //CommonJS导出
exports.t = t
