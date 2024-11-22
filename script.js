let navBarImgOpen = document.getElementById('navBarImgOpen')
let navBarImgClose = document.getElementById('navBarImgClose')
let nav = document.querySelectorAll('.nav')

let localImg = document.getElementById('localImg')
let verde = document.querySelector('.verde')
let prateado = document.querySelector('.prateado')
let dourado = document.querySelector('.dourado')
let grafite = document.querySelector('.grafite')
let azul = document.querySelector('.azul')


verde.addEventListener('click', () => {
    localImg.src = 'img/iphoneVerde.png'
})
prateado.addEventListener('click', () => {
    localImg.src = 'img/iphonePrateado.png'
})
dourado.addEventListener('click', () => {
    localImg.src = 'img/iphoneDourado.png'
})
grafite.addEventListener('click', () => {
    localImg.src = 'img/iphoneGrafite.png'
})
azul.addEventListener('click', () => {
    localImg.src = 'img/iphoneAzul.png'
})




navBarImgOpen.addEventListener('click', () => {
    nav.forEach((e)=>{
        e.style.display = 'flex'
        navBarImgOpen.style.display = 'none'
    })
    
})

navBarImgClose.addEventListener('click', () => {
    nav.forEach((e)=>{
        e.style.display = 'none'
        navBarImgOpen.style.display = 'flex'
    })
})