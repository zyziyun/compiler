function tokenizer (input) {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
        let char = input[current];
        if (char === '(') {// 括号匹配 - start
            tokens.push({
                type: 'paren',
                value: '('
            });
            current++;
            continue;
        }
        if (char === ')') {// 括号匹配 - end
            tokens.push({
                type: 'paren',
                value: ')'
            });
            current++;
            continue;
        }
        let WHITESPACE = /\s/;// 空格匹配 - 刨除在外
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }
        let NUMBERS = /[0-9]/;// 数字连续匹配
        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value
            });
            continue;
        }
        if (char === '"') {// 匹配内部字符串
            let value = '';
            char = input[++current];
            while (char !== '"') {
                value += char;
                char = input[++current];
            }
            char = input[++current];
            tokens.push({
                type: 'string',
                value
            });
            continue;
        }
        let LETTERS = /[a-z]/i;// 匹配内部字符串
        if (LETTERS.test(char)) {
            let value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value
            });
            continue;
        }
        throw new TypeError(
            'I dont know what this character is: '
             + char
        );
    }
    return tokens;
}

module.exports = tokenizer;