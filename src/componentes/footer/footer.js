const importarFooter = document.getElementById('footer');

const buscarFooter = () => {
    fetch('/hydrotime-/src/componentes/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            importarFooter.innerHTML = data;

            const fundoModal = importarFooter.querySelector('.fundoModal');
            document.body.appendChild(fundoModal);

            // Registra os eventos depois de carregar o componente
            iniciarTermos();
        });
};

buscarFooter();