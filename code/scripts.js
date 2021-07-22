'use strict'

const images = [
    {'id': '1', 'url': './images/img-1.jpg'},
    {'id': '2', 'url': './images/img-2.jpg'},
    {'id': '3', 'url': './images/img-3.jpg'},
    {'id': '4', 'url': './images/img-4.jpg'},
]

const containerItems = document.querySelector('.container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        containerItems.innerHTML += `
            <div class="item">
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems) // CARREGA AS IMAGENS SEM PRECISAR COLOCAR NO HTML

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]) // MANDA O PRIMEIRO ITEM PARA O FINAL
    items = document.querySelectorAll('.item') // RECARREGA A LISTA
}

const next = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)