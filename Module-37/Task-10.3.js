const myName = prompt('Введите Ваше имя');
const year = +prompt('Введите год рождения');
if (!isNaN(year)) {
    const age = 2025 - year;
    alert(`${myName}: ${age}`);
} else {
    alert('Год должен быть числом!');
}