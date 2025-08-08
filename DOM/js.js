

function addImage() {
    const myImg = document.querySelector(".input_link").value;
    
    const newImg = `<img src="${myImg}"/>`;
    const wrap = document.querySelector('.wrap');
    wrap.innerHTML = newImg;
    document.querySelector(".input_link").value = "";
};