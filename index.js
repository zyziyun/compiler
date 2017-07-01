import tokenizer from './tokenizer.js';
import parser from './parser.js';
import transformer from './transformer.js';
import codeGenerator from './codeGenerator.js';

function compiler (input) {
    let tokens = tokenizer(input);
    let ast = parser(tokens);
    let newAst = transformer(ast);
    let output = codeGenerator(newAst);
    return output;
}

export default compiler;