function tokenizer (input) {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
        let char = input[current];
        // 括号匹配 - start
        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '('
            });
            current++;
            continue;
        }
        // 括号匹配 - end
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')'
            });
            current++;
            continue;
        }
        // 空格匹配 - 刨除在外
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }
        // 数字连续匹配
        let NUMBERS = /[0-9]/;
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
        // 匹配内部字符串
        if (char === '"') {
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
        // 匹配变量名
        let LETTERS = /[a-z]/i;
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
        throw new TypeError('I dont know what this character is: ' + char);
    }
    return tokens;
}

// export default tokenizer;