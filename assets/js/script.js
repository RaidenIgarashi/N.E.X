let count = 0
const num_ads = 4

let slider = document.getElementById('slide')
let btnext = document.getElementById('next-button')
let btlast = document.getElementById("prev-button")
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


