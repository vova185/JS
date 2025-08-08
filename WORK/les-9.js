
            
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");
form.onsubmit = (e) => handleFormSubmit(e);

function handleFormSubmit(event) {
    event.preventDefault();
    const valName = usernameValid();
    const valPass = passwordValid();
    if (valName && valPass) {
        form.textContent = "Вы вошли в аккаунт!";
        username.value = "";
        email.value = "";
        password.value = "";
    }  
}  

function usernameValid() {
        
   if (username.value.length < 3) {
        form.textContent = "Имя меньше 3 символов";
        return false;
   }
    return true;
}
function passwordValid() {        
   const latinRegex = /^[A-Za-z]+$/; // Регулярное выражение для проверки латиницы
    if (!latinRegex.test(password.value) || password.value.length < 8) {
        form.textContent = "Пароль должен состоять из латинских букв и символов, не менее 8";
        return false;
    }
    return true;
      
};


    
