let count = 0
const num_ads = 4

let slider = document.getElementById('slide')
let btnext = document.getElementById('next-button')
let btlast = document.getElementById("prev-button")
const login = document.getElementById("menu_login")
const login_buttom = document.querySelectorAll(".login-buttom")
const login_escape = document.getElementById("login_escape")
const register_escape = document.getElementById("register_escape")
const register = document.getElementById("menu-register")
const register_buttom = document.querySelectorAll(".register-buttom")

function lastimage(){
    count--
    if(count < 0){
        count = num_ads-1
    }
    passimage()
}
   
function nextimage(){
    count++
    if(count > num_ads-1){
        count=0
    }
    passimage()
}

function passimage(){
    let marginpercent = 100/num_ads
    marginpercent = marginpercent*count
    slider.style.marginLeft = `-${marginpercent}%`
    slider.style.transition = "1s"    
}



setInterval(nextimage, 4000)

btnext.addEventListener('click', nextimage)
btlast.addEventListener('click', lastimage)

login_buttom.forEach(function(buttom){
    buttom.addEventListener("click", function(){
        login.classList.add('menu_login_open');
        document.body.classList.add('menu-active');
    })
})


login_escape.addEventListener('click', function(){
    login.classList.remove("menu_login_open")
    document.body.classList.remove("menu-active")
})

register_buttom.forEach(function(buttom){
    buttom.addEventListener("click", function(){
    register.classList.add("menu_login_open")
    document.body.classList.add("menu-active")
    login.classList.remove("menu_login_open")
    })
})

register_escape.addEventListener("click", function(){
    register.classList.remove("menu_login_open")
    document.body.classList.remove("menu-active")
})