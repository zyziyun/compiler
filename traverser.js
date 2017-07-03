function traverser (ast, visitor) {
    // 数组迭代
    function traverseArray (array, parent) {
        array.forEach(child => {
            traverseNode(child, parent);
        });
    }
    // 转换节点
    function traverseNode (node, parent) {
        let methods = visitor[node.type];
        // 进入方法
        if (methods && methods.enter) {
            methods.enter(node, parent);
        }
        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;
            default:
                throw new TypeError(node.type);
        }
        // 退出方法
        if (methods && methods.exit) {
            methods.exit(node, parent);
        }
    }
    // start
    traverseNode(ast, null); 
}

module.exports = traverser;