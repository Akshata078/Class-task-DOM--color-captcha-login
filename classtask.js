let colorBtn = document.querySelector(".color-btn");
let arr = ["red","green","yellow","pink","voilet","blue","aqua","orange"];
let colorBox = document.querySelector(".box");

    colorBtn.addEventListener("click",()=>{
        let color = arr[Math.floor(Math.random()*arr.length)];
        colorBox.style.backgroundColor = color;
    })



let captchaBtn = document.querySelector(".captcha-btn");
let captchaBox = document.querySelector(".captcha-output");
captchaBtn.addEventListener("click",()=>{
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0];
    let arr2 = [];
    for (let i=0; i<5; i++){
        let letter = Math.round(Math.random()*arr.length);
        arr2[i] = arr[letter];
    }
    let result = arr2.join("");
    captchaBox.innerHTML = result;  
})




let loginBtn = document.querySelector(".login-btn");
let loginOutput = document.querySelector(".login-output");

loginBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    loginOutput.innerHTML = `Login Information : <br> <br> Username : ${username.value} <br> Password : ${password.value}`;  
})



