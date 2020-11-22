const accordions = document.querySelectorAll('.accordion')
const icons = document.querySelectorAll('.dropdown_icon')
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

const prev = document.getElementById('btn-prev')
const next = document.getElementById('btn-next')
const slides = document.querySelectorAll('.slide')
let index = 0
const activeSlide = n => {
    for(let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
    activeSlide(ind)
}
const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    clearInterval(interval)
    if(index === 0) {
        index = slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}

next.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval)
    }
    nextSlide()
})
prev.addEventListener('click', prevSlide)
const interval = setInterval(nextSlide, 3000)


let hTwo = document.querySelectorAll('h2')
hTwo.forEach(el => {
    el.classList.add('animate__animated')
    el.classList.add('animate__zoomIn')
})











const burger = document.getElementById('burger')
const menuUl = document.getElementById('menu-ul')
burger.addEventListener('click', () => {
    menuUl.style.display = 'flex'
    burger.style.display = 'none'
})


