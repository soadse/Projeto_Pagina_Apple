let navBarImgOpen = document.getElementById('navBarImgOpen')
let navBarImgClose = document.getElementById('navBarImgClose')
let nav = document.querySelectorAll('.nav')

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