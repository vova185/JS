colors = ['red', 'blue', 'green', 'violet', 'yellow', 'brown', 'grey', 'pink'];

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};   
const getRandomColor = () => {
return colors[random(0, colors.length - 1)]
};
const par = document.querySelectorAll('p');    
const but = document.querySelector('button');

const kaleidoscope = setInterval(() => {
        par.forEach(p => {
            p.style.backgroundColor = getRandomColor();
        })
    }, 1000)

but.onclick = () => {
    clearInterval(kaleidoscope); 
};

