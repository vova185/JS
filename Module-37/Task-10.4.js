const myName = prompt('Enter your name');
const year = +prompt('Enter the year of birth');
if (!isNaN(year)) {
    let age = 2025 - year;
    let result = age % 10;
    result.toString().at(-1)
    switch(result) {
        case 1:
            alert(`${myName}: ${age.toString().slice(0, -1)}1 year`);
            break;
        case (2, 3, 4):
            alert(`${myName}: ${age.toString().slice(0, -1)}3 year`);
            break;
        default:
            alert(`${myName}: ${age.toString().slice(0, -1)}7 year`);
    }   
} else {
    alert('The year must be a number!');
}


