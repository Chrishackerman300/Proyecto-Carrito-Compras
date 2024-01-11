document.addEventListener('DOMContentLoaded', () => {

    //Variables Menu, Submenu y Footer
    const openMenu = document.querySelector('#open-menu')
    const sidebar = document.querySelector('#sidebar-menu')
    const closeMenu = document.querySelector('#close-menu')
    const submenuBtn = document.querySelector('#submenu-btn')
    const submenu = document.querySelector('#submenu')
    const openFooter = document.querySelector('#btn-info')
    const footer = document.querySelector('#footer')

    //Varaibles Carrito
    const cartBtn = document.querySelector('#carrito-btn')
    const carrito = document.querySelector('#carrito')
    const listaCarrito = document.querySelector('#lista-carrito tbody')
    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    const listaCursos = document.querySelector('#lista-cursos')
    let itemsCursos = []

    //Variables Darkmode
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
        listaCursos.addEventListener('click', agregarCarrito)
        carrito.addEventListener('click', eliminarCurso)
        vaciarCarrito.addEventListener('click', eliminarCarrito)
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

    //Función agregarCarrito
    function agregarCarrito(e){
        e.preventDefault()

        if(e.target.classList.contains('agregar-carrito')){
            const contenido = e.target.parentElement.parentElement

            datosCurso(contenido)
        }
    }

    //Función datosCurso
    function datosCurso(curso){
        
        const infoCurso = {
            imagen: curso.querySelector('.card__img').src,
            titulo: curso.querySelector('.curso-title').textContent,
            precio: curso.querySelector('.descount').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }

        const existe = itemsCursos.some(curso => curso.id === infoCurso.id)

        if(existe){
            const cursos = itemsCursos.map(curso => {
                if(curso.id === infoCurso.id){
                    curso.cantidad++
                    return curso
                }
                else{
                    return curso
                }
            })
        }
        else{
            itemsCursos = [...itemsCursos, infoCurso]
        }

        mostrarCarrito()
    }

    //Función mostrarCarrito
    function mostrarCarrito(){

        limpiar()

        itemsCursos.forEach(curso => {
            const {imagen, titulo, precio, id, cantidad} = curso
            const producto = document.createElement('tr')

            producto.innerHTML = `
                <td>
                    <img src="${imagen}" width="90px">
                </td>

                <td>
                    <p>${titulo}</p>
                </td>

                <td>
                    <p>${precio}</p>
                </td>

                <td>
                    <p>${cantidad}</p>
                </td>

                <td>
                    <a href="#" class="borrar-curso" data-id="${id}"> X </a>
                </td>
            `

            listaCarrito.appendChild(producto)
        })
    }

    //Función limpiar
    function limpiar(){
        while(listaCarrito.firstChild){
            listaCarrito.removeChild(listaCarrito.firstChild)
        }
    }

    //Función eliminarCurso
    function eliminarCurso(e){
        e.preventDefault()

        if(e.target.classList.contains('borrar-curso')){
            const identi = e.target.getAttribute('data-id')

            itemsCursos = itemsCursos.filter(curso => curso.id !== identi)
        }

        mostrarCarrito()
    }

    //Función eliminarCarrito
    function eliminarCarrito(e){
        e.preventDefault()

        itemsCursos = []

        limpiar()
    }
})