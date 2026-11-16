const importarFooter = document.getElementById('footer');

const buscarFooter = () => {
    fetch('/COMPONENTES/FOOTER/footer.html')
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