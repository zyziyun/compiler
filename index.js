var tokenizer = require('./tokenizer.js');
var parser = require('./parser.js');
var transformer = require('./transformer.js');
var codeGenerator = require('./codeGenerator.js');

function compiler (input) {
    // 词法分析
    let tokens = tokenizer(input);
    // 句法分析 -> ast
    let ast = parser(tokens);
    // 转换后生成的新ast
    let newAst = transformer(ast);
    // 生成字符串
    let output = codeGenerator(newAst);
    return output;
}

compiler('(add 2 (subtract 4 2))');