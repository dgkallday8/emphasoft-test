let accordions = document.querySelectorAll('.accordion')
let icons = document.querySelectorAll('.dropdown_icon')
let deg = 0
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        let icon = icons[i]
        icon.onclick = icon.style.transform = `rotate(${deg + 180}deg)`
        deg += 180
        if (deg === 360) {
            deg = 0
        }
        let hideTextBlock = accordions[i].nextElementSibling
        hideTextBlock.classList.toggle('active_text')
        !hideTextBlock.classList.toggle('hide_text')
    })
}
















/*
let slides = document.querySelectorAll('.carousel-item')
// console.log(slides)
let slider = []

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src
    slides[i].remove()
}
// console.log(slider)

let step = 0
let offset = 0

function draw() {
    for (let i = 0; i < 4; i++) {
        let img = document.createElement('img')
        img.src = slider[step]
        img.classList.add('carousel-item')
        img.style.right = '25%'
        document.querySelector('.our_partners-carousel').appendChild(img)

        if (step + 1 === slider.length) {
            step = 0
        } else {
            step++
        }
    }


    offset = 1
}

function left() {

    let slides2 = document.querySelectorAll('.carousel-item')
    let offset2 = 0
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2*512 - 512 + 'px'

    }

    setTimeout(() => {
        slides2[0].remove()
        draw()
    }, 1000)
}


// draw()


*/