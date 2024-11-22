let b = document.querySelectorAll('.element_buttom')
const b_reset = document.querySelector('.reset_buttom')
let buttom_state = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0} // 0 = medo, 1 = morte, 2 = caos, 3 = conhecimento, 4 = sangue
const medo = document.querySelectorAll('.medo')
const morte = document.querySelectorAll('.morte') 
const caos = document.querySelectorAll('.caos')
const conhecimento = document.querySelectorAll('.conhecimento')
const sangue= document.querySelectorAll('.sangue')
let translate_state = {0: medo, 1: morte, 2: caos, 3: conhecimento, 4: sangue}
const catalogo = document.querySelector('.catalogo_criatura')
const input = document.getElementById('search')

b.forEach(function(el, i){
    el.addEventListener('click', function(){
        const isCheck = buttom_state[i] === 0
        isCheck ? buttom_state[i] = 1 : buttom_state[i] = 0
        isCheck ? el.style.opacity = 0.5 : el.style.opacity = 1
        element_filter()
    })
})

b_reset.addEventListener('click', function(){
    for(i in buttom_state){
        buttom_state[i] = 0
        b.forEach(function(el){
            el.style.opacity = 1
            element_filter()
        })
    }
})

function element_filter(){
    for(i in translate_state){
        if (buttom_state[i] == 1){
            translate_state[i].forEach(function(creature){
                if (!(catalogo.contains(creature))){
                    catalogo.appendChild(creature)
                }
            })
        }
        if (buttom_state[i] == 0){
            translate_state[i].forEach(function(creature){
                if (catalogo.contains(creature)){
                    catalogo.removeChild(creature)
                }
            })
        }
        let count = 0
        for (value in buttom_state){
            if (buttom_state[value] == 0){
                count++
                console.log(count)
            }
        if(count === 5){
            for(i2 in translate_state){
                translate_state[i2].forEach(function(creature){
                    catalogo.appendChild(creature)
                })
        }
        } 
    }
}
}



function sayMyName(){
    for (i in translate_state){
        translate_state[i].forEach(function(el){
            console.log(el.textContent)
        })
    }
}

search.addEventListener('input', function(ev){
    const value = ev.target.value
    let size = value.length
    console.log(size)
    for (i in translate_state){
        translate_state[i].forEach(function(creature){
            let name = String(creature.textContent).trim()
            if (name.includes(value)){
                if(!(catalogo.contains(creature))){
                    catalogo.appendChild(creature)
                }
            }else{
                if(catalogo.contains(creature)){
                    catalogo.removeChild(creature)
                }
            }
        })
    }
})