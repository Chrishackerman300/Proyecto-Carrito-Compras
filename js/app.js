document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const openMenu = document.querySelector('#open-menu')
    const sidebar = document.querySelector('#sidebar-menu')
    const closeMenu = document.querySelector('#close-menu')
    const submenuBtn = document.querySelector('#submenu-btn')
    const submenu = document.querySelector('#submenu')
    const cartBtn = document.querySelector('#carrito-btn')
    const carrito = document.querySelector('#carrito')

    cargarEventos()

    //Función cargarEventos
    function cargarEventos(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
        submenuBtn.addEventListener('click', abrirSubmenu)
        cartBtn.addEventListener('click', abrirCarrito)
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
})