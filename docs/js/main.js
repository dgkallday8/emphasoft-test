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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpXHJcbmxldCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9pY29uJylcclxubGV0IGRlZyA9IDBcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhY2NvcmRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhY2NvcmRpb25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpY29uID0gaWNvbnNbaV1cclxuICAgICAgICBpY29uLm9uY2xpY2sgPSBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkZWcgKyAxODB9ZGVnKWBcclxuICAgICAgICBkZWcgKz0gMTgwXHJcbiAgICAgICAgaWYgKGRlZyA9PT0gMzYwKSB7XHJcbiAgICAgICAgICAgIGRlZyA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhpZGVUZXh0QmxvY2sgPSBhY2NvcmRpb25zW2ldLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGhpZGVUZXh0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlX3RleHQnKVxyXG4gICAgICAgICFoaWRlVGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVfdGV4dCcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5sZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0nKVxyXG4vLyBjb25zb2xlLmxvZyhzbGlkZXMpXHJcbmxldCBzbGlkZXIgPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlcltpXSA9IHNsaWRlc1tpXS5zcmNcclxuICAgIHNsaWRlc1tpXS5yZW1vdmUoKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHNsaWRlcilcclxuXHJcbmxldCBzdGVwID0gMFxyXG5sZXQgb2Zmc2V0ID0gMFxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaW1nLnNyYyA9IHNsaWRlcltzdGVwXVxyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1pdGVtJylcclxuICAgICAgICBpbWcuc3R5bGUucmlnaHQgPSAnMjUlJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXJfcGFydG5lcnMtY2Fyb3VzZWwnKS5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG4gICAgICAgIGlmIChzdGVwICsgMSA9PT0gc2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdGVwID0gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ZXArK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb2Zmc2V0ID0gMVxyXG59XHJcblxyXG5mdW5jdGlvbiBsZWZ0KCkge1xyXG5cclxuICAgIGxldCBzbGlkZXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0nKVxyXG4gICAgbGV0IG9mZnNldDIgPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlczIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXMyW2ldLnN0eWxlLmxlZnQgPSBvZmZzZXQyKjUxMiAtIDUxMiArICdweCdcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVzMlswXS5yZW1vdmUoKVxyXG4gICAgICAgIGRyYXcoKVxyXG4gICAgfSwgMTAwMClcclxufVxyXG5cclxuXHJcbi8vIGRyYXcoKVxyXG5cclxuXHJcbiovIl0sImZpbGUiOiJtYWluLmpzIn0=
