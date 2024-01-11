document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const openMenu = document.querySelector('#open-menu')
    const sidebar = document.querySelector('#sidebar-menu')
    const closeMenu = document.querySelector('#close-menu')
    const submenuBtn = document.querySelector('#submenu-btn')
    const submenu = document.querySelector('#submenu')
    const cartBtn = document.querySelector('#carrito-btn')
    const carrito = document.querySelector('#carrito')
    const openFooter = document.querySelector('#btn-info')
    const footer = document.querySelector('#footer')
    const btnDarkmode = document.querySelector('#darkmode-btn')
    const body = document.querySelector('body')

    cargarEventos()

    //Función cargarEventos
    function cargarEventos(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
        submenuBtn.addEventListener('click', abrirSubmenu)
        cartBtn.addEventListener('click', abrirCarrito)
        openFooter.addEventListener('click', abrirFooter)
        btnDarkmode.addEventListener('click', showDarkmode)
    }

    //Función abrirMenu
    function abrirMenu(){
        sidebar.classList.add('show-sidebar')
        console.log('Abriendo el menu')
    }

    //Función cerrarMenu
    function cerrarMenu(){
        sidebar.classList.remove('show-sidebar')
        console.log('Cerrando el menu')
    }

    //Función abrirSubmenu
    function abrirSubmenu(){
        if(submenu.classList.contains('show-submenu')){
            submenu.classList.remove('show-submenu')
            console.log('Cerrando el submenu')
        }
        else{
            submenu.classList.add('show-submenu')
            console.log('Abriendo el submenu')
        }
    }

    //Función abrirCarrito
    function abrirCarrito(){
        if(carrito.classList.contains('show-carrito')){
            carrito.classList.remove('show-carrito')
            console.log('Abriendo el carrito')
        }
        else{
            carrito.classList.add('show-carrito')
            console.log('Cerrando el carrito')
        }
    }

    //Función abrirFooter
    function abrirFooter(){
        if(footer.classList.contains('show-footer')){
            footer.classList.remove('show-footer')
            openFooter.classList.remove('btn-active')
        }
        else{
            footer.classList.add('show-footer')
            openFooter.classList.add('btn-active')
        }
    }

    //Función showDarkmode
    function showDarkmode(){
        if(body.classList.contains('darkmode')){
            body.classList.remove('darkmode')
        }
        else{
            body.classList.add('darkmode')
        }
    }
})