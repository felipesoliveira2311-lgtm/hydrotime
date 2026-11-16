const cardIcone=()=>{
    const comoFunciona = document.querySelector('#cardIcone.comoFunciona');

    const assetsIcone = '/assets_site_iot_separados/iconesSVG/'

    const cardIcone = [
        {
            icone: assetsIcone + 'dispositivo.svg',
            passo:'01',
            titulo:'Instale os sensores',
            descricao:'Em vasos, canteiros, estufas ou áreas externas.'
        },

        {
            icone: assetsIcone + 'cloud.svg',
            passo:'02',
            titulo:'Os dados são enviados',
            descricao:'Em tempo real para a plataforma.',
        },

        {
            icone: assetsIcone + 'grafico.svg',
            passo:'03',
            titulo:'Acompanhe no painel',
            descricao:'Visualize dados de forma simples e intuitiva',
        },

        {
            icone: assetsIcone + 'leaf.svg',
            passo:'04',
            titulo:'Tome decisões melhores',
            descricao:'Com base em dados e recomendações personalizadas.'
        },
    ]
    
    const criarCard=()=>{
      
        cardIcone.forEach((card) =>{
            let article = document.createElement('article')
            article.innerHTML = `
          
                <div class="header_cardIcone">
                    <div class="borda_icone">
                        <img src=${card.icone}>
                    </div>
                    <div class="proximo">
                        <hr>
                    </div>
                </div>

                <div class="conteudo_icone">
                    <div class="passo">${card.passo}</div>
                    <h3 class="titulo_cardIcone">${card.titulo}</h3>
                    <p class="descricao_cardIcone" >${card.descricao}</p>
                </div>
            `
            comoFunciona.appendChild(article);
        });return comoFunciona;
    };

if(comoFunciona){criarCard()};

    


};cardIcone()