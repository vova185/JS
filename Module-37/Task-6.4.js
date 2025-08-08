let field = '';
for (i = 0; i < 9; i += 1) {
    move = i % 2 === 0 ? 'x ' : 'o ';
    field += move;
    if (i === 2 || i === 5) {
        field += '\n';
    }
}
console.log(field);