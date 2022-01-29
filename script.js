let selector = document.getElementById("selector");
let left = document.querySelector(".left");

selector.addEventListener("change", ()=>{
    switch(selector.value){
        case "redwoman":
            left.innerHTML = `<img src="./img/womanred.png" alt="">`;
            break;
        case "manglass":
            left.innerHTML = `<img src="./img/manglass.png" alt="">`;
            break;
        case "manbrown":
            left.innerHTML = `<img src="./img/manbrown.png" alt="">`;
            break;
        case "womanbrown":
            left.innerHTML = `<img src="./img/womanbrown.png" alt="">`;
            break;
        default:
            left.innerHTML = "";
            break;
    }
})