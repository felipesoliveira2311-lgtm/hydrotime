const abas = document.querySelectorAll('.aba');
        const paineis = document.querySelectorAll('.painel');

        abas.forEach(aba => {
            aba.addEventListener('click', () => {
                abas.forEach(a => {
                    a.classList.remove('ativa');
                    a.setAttribute('aria-selected', 'false');
                });
                paineis.forEach(p => p.classList.remove('ativo'));

                aba.classList.add('ativa');
                aba.setAttribute('aria-selected', 'true');
                document.getElementById(aba.dataset.alvo).classList.add('ativo');
            });
        });

        // Atalho da seção Sobre nós para a aba Integrantes
        document.querySelectorAll('[data-ir-para]').forEach(botao => {
            botao.addEventListener('click', () => {
                const abaDestino = document.querySelector(`.aba[data-alvo="${botao.dataset.irPara}"]`);
                if (abaDestino) abaDestino.click();
            });
        });

        // Filtros dos artigos do blog
        const filtros = document.querySelectorAll('.categoria');
        const artigos = document.querySelectorAll('.artigo-card');

        filtros.forEach(filtro => {
            filtro.addEventListener('click', () => {
                filtros.forEach(botao => {
                    botao.classList.remove('ativa');
                    botao.setAttribute('aria-pressed', 'false');
                });
                filtro.classList.add('ativa');
                filtro.setAttribute('aria-pressed', 'true');
                const selecionado = filtro.dataset.filtro;
                artigos.forEach(artigo => {
                    artigo.hidden = selecionado !== 'todos' &&
                                    artigo.dataset.categoria !== selecionado;
                });
            });
        });
