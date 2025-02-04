window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabeçalho')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

let mobilemenu = document.querySelector('.mobile-menu')
let listmenu = document.querySelector('.menu')

mobilemenu.addEventListener("click", ()=> {
    listmenu.classList.toggle('ativar')
})