const menuMobileIcon = document.querySelector('.menu-hamburguer-icon'); // Aqui estamos pegando o elemento que tem a imagem do menu mobile

const menuMobileCloseIcon = document.querySelector('.close-menu-icon'); // Aqui estamos pegando o elemento que tem a imagem do menu mobile


// Aqui estamos adicionando um evento de click no menu mobile para adicionar a classe que vai mostrar o menu
menuMobileIcon.addEventListener('click', () => {
    const menuMobile = document.querySelector('.menu-mobile'); // Aqui estamos pegando o menu mobile
    menuMobile.classList.toggle('open'); // Aqui estamos adicionando a classe que vai mostrar o menu
})

// Aqui estamos adicionando um evento de click no menu mobile para remover a classe que vai mostrar o menu

menuMobileCloseIcon.addEventListener('click', () => {
    const menuMobile = document.querySelector('.menu-mobile'); // Aqui estamos pegando o menu mobile
    menuMobile.classList.remove('open'); // Aqui estamos removendo a classe que vai mostrar o menu
})