let accordions = document.querySelectorAll('.accordion')

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        let hideTextBlock = accordions[i].nextElementSibling
        hideTextBlock.classList.toggle('active_text')
        !hideTextBlock.classList.toggle('hide_text')
    })
}

