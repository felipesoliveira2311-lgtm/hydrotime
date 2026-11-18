const importarMenu = document.getElementById('menu');







const buscarMenu = () =>{
   fetch('/src/componentes/menu/menu.html?v=6d2f636').then(response => response.text()).then(data =>{

    importarMenu.innerHTML = data;

    
   const icone = document.getElementById('icone_sidebar');
   const menu = document.getElementById('principal_bar');

   icone.addEventListener('click', () =>{menu.classList.toggle('open_sidebar');})

   });
}

console.log(buscarMenu())