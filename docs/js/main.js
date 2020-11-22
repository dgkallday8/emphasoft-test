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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJylcclxuY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25faWNvbicpXHJcbmxldCBkZWcgPSAwXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3JkaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjb3JkaW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IGljb25zW2ldXHJcbiAgICAgICAgaWNvbi5vbmNsaWNrID0gaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnICsgMTgwfWRlZylgXHJcbiAgICAgICAgZGVnICs9IDE4MFxyXG4gICAgICAgIGlmIChkZWcgPT09IDM2MCkge1xyXG4gICAgICAgICAgICBkZWcgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoaWRlVGV4dEJsb2NrID0gYWNjb3JkaW9uc1tpXS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBoaWRlVGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZV90ZXh0JylcclxuICAgICAgICAhaGlkZVRleHRCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlX3RleHQnKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXByZXYnKVxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1uZXh0JylcclxuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJylcclxubGV0IGluZGV4ID0gMFxyXG5jb25zdCBhY3RpdmVTbGlkZSA9IG4gPT4ge1xyXG4gICAgZm9yKGxldCBzbGlkZSBvZiBzbGlkZXMpIHtcclxuICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgc2xpZGVzW25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVDdXJyZW50U2xpZGUgPSBpbmQgPT4ge1xyXG4gICAgYWN0aXZlU2xpZGUoaW5kKVxyXG59XHJcbmNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmKGluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGluZGV4ID0gMFxyXG4gICAgICAgIHByZXBhcmVDdXJyZW50U2xpZGUoaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZGV4KytcclxuICAgICAgICBwcmVwYXJlQ3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDFcclxuICAgICAgICBwcmVwYXJlQ3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleC0tXHJcbiAgICAgICAgcHJlcGFyZUN1cnJlbnRTbGlkZShpbmRleClcclxuICAgIH1cclxufVxyXG5cclxubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB9XHJcbiAgICBuZXh0U2xpZGUoKVxyXG59KVxyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKVxyXG5jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgMzAwMClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbmxldCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtaXRlbScpXHJcbi8vIGNvbnNvbGUubG9nKHNsaWRlcylcclxubGV0IHNsaWRlciA9IFtdXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgc2xpZGVyW2ldID0gc2xpZGVzW2ldLnNyY1xyXG4gICAgc2xpZGVzW2ldLnJlbW92ZSgpXHJcbn1cclxuLy8gY29uc29sZS5sb2coc2xpZGVyKVxyXG5cclxubGV0IHN0ZXAgPSAwXHJcbmxldCBvZmZzZXQgPSAwXHJcblxyXG5mdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWcuc3JjID0gc2xpZGVyW3N0ZXBdXHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLWl0ZW0nKVxyXG4gICAgICAgIGltZy5zdHlsZS5yaWdodCA9ICcyNSUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91cl9wYXJ0bmVycy1jYXJvdXNlbCcpLmFwcGVuZENoaWxkKGltZylcclxuXHJcbiAgICAgICAgaWYgKHN0ZXAgKyAxID09PSBzbGlkZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ZXAgPSAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RlcCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvZmZzZXQgPSAxXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZnQoKSB7XHJcblxyXG4gICAgbGV0IHNsaWRlczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtaXRlbScpXHJcbiAgICBsZXQgb2Zmc2V0MiA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzMi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlczJbaV0uc3R5bGUubGVmdCA9IG9mZnNldDIqNTEyIC0gNTEyICsgJ3B4J1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzbGlkZXMyWzBdLnJlbW92ZSgpXHJcbiAgICAgICAgZHJhdygpXHJcbiAgICB9LCAxMDAwKVxyXG59XHJcblxyXG5cclxuLy8gZHJhdygpXHJcblxyXG5cclxuKi8iXSwiZmlsZSI6Im1haW4uanMifQ==
