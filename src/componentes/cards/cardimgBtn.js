const cardSolucoes = document.querySelector('#card.solucoes');

const assetsImg = '/assets_site_iot_separados/BANNER/solucoes/';
const assetsIcone = '/assets_site_iot_separados/iconesSVG/';

const cards = [
    
    {
        imagem: assetsImg + 'sensor.jpg',
        icone: assetsIcone + 'leaf.svg',
        titulo:'Sensor de Solo',
        descricao:'Monitora umidade, temperatura e luminosidade do solo.',
        botao:'→',    
    }, 

    {
        imagem: assetsImg + 'monitoramento.jpg',
        icone: assetsIcone + 'dispositivo.svg',
        titulo:'Monitoramento de Estufas',
        descricao:'Controle o ambiente da sua estufa em tempo real.',
        botao:'→',
    },

    {
        imagem: assetsImg + 'irrigacao.jpg',
        icone: assetsIcone + 'umidade.svg',
        titulo:'Irrigação Inteligente',
        descricao:'Acione a irrigação de forma automática e eficiente.',
        botao:'→',
    },

    {
        imagem: assetsImg + 'analise.jpg',
        icone: assetsIcone + 'grafico.svg',
        titulo:'Análise de Crescimento',
        descricao:'Acompanhe o desenvolvimento das suas plantas.',
        botao:'→',
    },

    {
        imagem: assetsImg + 'plataforma.jpg',
        icone: assetsIcone + 'dispositivo.svg',
        titulo:'Plataforma de Gestão',
        descricao:'Visualize dados, receba alertas e tome decisões com facilidade.',
        botao:'→',
    },

    {
        imagem: assetsImg + 'luminosidade.png',
        icone: assetsIcone + 'iluminacao.svg',
        titulo:'Controle de iluminação',
        descricao:'Gerencie a iluminação artificial conforme as necessidades do seu cultivo.',
        botao:'→',
    },

]

const criarCard=(pagina, array)=>{

            array.forEach((card) => {
                console.log(card)
                let article = document.createElement('article');
                article.classList.add('corpo_card')
                article.innerHTML = `
                    <div class="imagem_card">
                        <img src='${card.imagem}'>
                    </div>

                    <div class="borda_icone">
                        <img src="${card.icone}">
                    </div>

                    <div class="card_main">
                        <div class='conteudo_card'>
                            <h3 class='h3_card'>${card.titulo}</h3>
                            <p class="descricao_card">${card.descricao}</p>
                        </div>
                
                        <a class="mais" href="/HTML/FORMULARIO/formulario.html">${card.botao}</a>
                    </div>
                   
                    `
                pagina.appendChild(article)
            }) }

if(cardSolucoes){criarCard(cardSolucoes,cards)}