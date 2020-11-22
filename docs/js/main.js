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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJylcclxuY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25faWNvbicpXHJcbmxldCBkZWcgPSAwXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3JkaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjb3JkaW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IGljb25zW2ldXHJcbiAgICAgICAgaWNvbi5vbmNsaWNrID0gaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnICsgMTgwfWRlZylgXHJcbiAgICAgICAgZGVnICs9IDE4MFxyXG4gICAgICAgIGlmIChkZWcgPT09IDM2MCkge1xyXG4gICAgICAgICAgICBkZWcgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoaWRlVGV4dEJsb2NrID0gYWNjb3JkaW9uc1tpXS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBoaWRlVGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZV90ZXh0JylcclxuICAgICAgICAhaGlkZVRleHRCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlX3RleHQnKVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcHJldicpXHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKVxyXG5jb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKVxyXG5sZXQgaW5kZXggPSAwXHJcbmNvbnN0IGFjdGl2ZVNsaWRlID0gbiA9PiB7XHJcbiAgICBmb3IobGV0IHNsaWRlIG9mIHNsaWRlcykge1xyXG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBzbGlkZXNbbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUN1cnJlbnRTbGlkZSA9IGluZCA9PiB7XHJcbiAgICBhY3RpdmVTbGlkZShpbmQpXHJcbn1cclxuY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYoaW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaW5kZXggPSAwXHJcbiAgICAgICAgcHJlcGFyZUN1cnJlbnRTbGlkZShpbmRleClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5kZXgrK1xyXG4gICAgICAgIHByZXBhcmVDdXJyZW50U2xpZGUoaW5kZXgpXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIGlmKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgIHByZXBhcmVDdXJyZW50U2xpZGUoaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZGV4LS1cclxuICAgICAgICBwcmVwYXJlQ3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGludGVydmFsKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIH1cclxuICAgIG5leHRTbGlkZSgpXHJcbn0pXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpXHJcbmNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dFNsaWRlLCAzMDAwKVxyXG5cclxuXHJcbmxldCBoVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDInKVxyXG5oVHdvLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnKVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fem9vbUluJylcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcclxuY29uc3QgbWVudVVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdWwnKVxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtZW51VWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgYnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
