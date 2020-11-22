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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJylcclxuY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25faWNvbicpXHJcbmxldCBkZWcgPSAwXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3JkaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjb3JkaW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IGljb25zW2ldXHJcbiAgICAgICAgaWNvbi5vbmNsaWNrID0gaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnICsgMTgwfWRlZylgXHJcbiAgICAgICAgZGVnICs9IDE4MFxyXG4gICAgICAgIGlmIChkZWcgPT09IDM2MCkge1xyXG4gICAgICAgICAgICBkZWcgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoaWRlVGV4dEJsb2NrID0gYWNjb3JkaW9uc1tpXS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBoaWRlVGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZV90ZXh0JylcclxuICAgICAgICAhaGlkZVRleHRCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlX3RleHQnKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXByZXYnKVxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1uZXh0JylcclxuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJylcclxubGV0IGluZGV4ID0gMFxyXG5jb25zdCBhY3RpdmVTbGlkZSA9IG4gPT4ge1xyXG4gICAgZm9yKGxldCBzbGlkZSBvZiBzbGlkZXMpIHtcclxuICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgc2xpZGVzW25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVDdXJyZW50U2xpZGUgPSBpbmQgPT4ge1xyXG4gICAgYWN0aXZlU2xpZGUoaW5kKVxyXG59XHJcbmNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmKGluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGluZGV4ID0gMFxyXG4gICAgICAgIHByZXBhcmVDdXJyZW50U2xpZGUoaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZGV4KytcclxuICAgICAgICBwcmVwYXJlQ3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDFcclxuICAgICAgICBwcmVwYXJlQ3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleC0tXHJcbiAgICAgICAgcHJlcGFyZUN1cnJlbnRTbGlkZShpbmRleClcclxuICAgIH1cclxufVxyXG5cclxubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB9XHJcbiAgICBuZXh0U2xpZGUoKVxyXG59KVxyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKVxyXG5jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgMzAwMClcclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgaFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gyJylcclxuaFR3by5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJylcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX3pvb21JbicpXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5sZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0nKVxyXG4vLyBjb25zb2xlLmxvZyhzbGlkZXMpXHJcbmxldCBzbGlkZXIgPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlcltpXSA9IHNsaWRlc1tpXS5zcmNcclxuICAgIHNsaWRlc1tpXS5yZW1vdmUoKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHNsaWRlcilcclxuXHJcbmxldCBzdGVwID0gMFxyXG5sZXQgb2Zmc2V0ID0gMFxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaW1nLnNyYyA9IHNsaWRlcltzdGVwXVxyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1pdGVtJylcclxuICAgICAgICBpbWcuc3R5bGUucmlnaHQgPSAnMjUlJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXJfcGFydG5lcnMtY2Fyb3VzZWwnKS5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG4gICAgICAgIGlmIChzdGVwICsgMSA9PT0gc2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdGVwID0gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ZXArK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb2Zmc2V0ID0gMVxyXG59XHJcblxyXG5mdW5jdGlvbiBsZWZ0KCkge1xyXG5cclxuICAgIGxldCBzbGlkZXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0nKVxyXG4gICAgbGV0IG9mZnNldDIgPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlczIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXMyW2ldLnN0eWxlLmxlZnQgPSBvZmZzZXQyKjUxMiAtIDUxMiArICdweCdcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVzMlswXS5yZW1vdmUoKVxyXG4gICAgICAgIGRyYXcoKVxyXG4gICAgfSwgMTAwMClcclxufVxyXG5cclxuXHJcbi8vIGRyYXcoKVxyXG5cclxuXHJcbiovIl0sImZpbGUiOiJtYWluLmpzIn0=
