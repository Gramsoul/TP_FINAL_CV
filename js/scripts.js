
const   btnEdit = document.querySelector('.editInfo'),
        container = document.querySelector('.containerE'),
        etiqueta = document.querySelector('.etiqueta'),
        acordeon = document.querySelector('.acordeon');
     
const close = acordeon.closest("article > div");

// MUESTRA U OCULTA EL CONTENEDOR
const cambiar = () => {
    if (container.classList.contains('hidden')){
        container.classList.remove('hidden');
        btnEdit.style.backgroundColor = 'grey';
        btnEdit.disabled = true;
    } else {
        container.classList.add('hidden');
        btnEdit.style.backgroundColor = 'rgb(255, 200, 129)';
        btnEdit.disabled = false;
    }
}

const expandir = () => {
    if (acordeon.classList.contains('ocultar')){
        acordeon.classList.remove('ocultar');  
    } else {
        acordeon.classList.add('ocultar');   
    }
 }

btnEdit.addEventListener('click', cambiar);
etiqueta.addEventListener('click', expandir);