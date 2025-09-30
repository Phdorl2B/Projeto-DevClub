let prevButton = document.getElementById(`prev`)
let nextButton = document.getElementById(`next`)
let container = document.querySelector(`.container`)
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector(`.indicators`)
let dots = document.querySelectorAll(`.indicators ul li`)

let list = container.querySelector(`.list`)


let active = 0
let firstposition = 0
let lastposition = items.length - 1


nextButton.onclick = () => {
    let itemOld = container.querySelector(`.list .item.active`)
    if (itemOld) itemOld.classList.remove(`active`)

    active = active + 1 > lastposition ? 0 : active + 1
    items[active].classList.add(`active`)

    let dotsOld = indicator.querySelector(`ul li.active`)
    if (dotsOld) dotsOld.classList.remove(`active`)
    dots[active].classList.add(`active`)

    indicator.querySelector(`.number`).innerHTML = String(active + 1).padStart(2, '0')

    list.style.setProperty(`--calculation`, 1)    

}

prevButton.onclick = () => {
    let itemOld = container.querySelector(`.list .item.active`)
    if (itemOld) itemOld.classList.remove(`active`)

    active = active - 1 < firstposition ? lastposition : active - 1
    items[active].classList.add(`active`)

    let dotsOld = indicator.querySelector(`ul li.active`)
    if (dotsOld) dotsOld.classList.remove(`active`)
    dots[active].classList.add(`active`)

    list.style.setProperty(`--calculation`, -1)   

    indicator.querySelector(`.number`).innerHTML = String(active + 1).padStart(2, '0')
}







