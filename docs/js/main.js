let accordions = document.querySelectorAll('.accordion')

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        let hideTextBlock = accordions[i].nextElementSibling
        hideTextBlock.classList.toggle('active_text')
        !hideTextBlock.classList.toggle('hide_text')
    })
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFjY29yZGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFjY29yZGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGhpZGVUZXh0QmxvY2sgPSBhY2NvcmRpb25zW2ldLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGhpZGVUZXh0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlX3RleHQnKVxyXG4gICAgICAgICFoaWRlVGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVfdGV4dCcpXHJcbiAgICB9KVxyXG59XHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
