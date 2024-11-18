let c_morte = document.querySelector('.morte')
let c_energia = document.querySelectorAll('.caos')
let c_conhecimento = document.querySelectorAll('.conhecimento')
let c_sangue = document.querySelectorAll('.sangue')
let b = document.querySelectorAll('.element_buttom')
let b_morte = document.querySelector('.morte_buttom')
let buttom_state = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0} // 0 = medo, 1 = morte, 2 = caos, 3 = conhecimento, 4 = sangue




b.forEach(function(el, i){
    el.addEventListener('click', function(){
        const isCheck = buttom_state[i] === 0
        isCheck ? buttom_state[i] = 1 : buttom_state[i] = 0
        isCheck ? el.style.opacity = 0.5 : el.style.opacity = 1
    })
})




   