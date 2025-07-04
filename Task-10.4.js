const myName = prompt('Введите Ваше имя');
const year = +prompt('Введите год рождения');
if (!isNaN(year)) {
    let age = 2025 - year;
    let result = age % 10;
    result.toString().at(-1)
    switch(result) {
        case 1:
            alert(`${myName}: ${age.toString().slice(0, -1)}1 год`);
            break;
        case (2, 3, 4):
            alert(`${myName}: ${age.toString().slice(0, -1)}3 года`);
            break;
        default:
            alert(`${myName}: ${age.toString().slice(0, -1)}7 лет`);
    }   
} else {
    alert('Год должен быть числом!');
}


