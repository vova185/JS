const number = +prompt('Введите число');
const rowNumbers = [];
for (let i = 0; i <= number; i += 1) {
    rowNumbers.push(i);
}
alert(rowNumbers);