
const bannerCardIniciar=()=>{
const  bannerCard = document.querySelector('#bannerCard');


const assetsImg = '/src/assets/banner/solucoes/'

const assetsIcone = '/src/assets/icones/'

let indice = 0;

const header = {
    categoria:'NOSSAS SOLUÇÕES',
    titulo:'Soluções em destaque',
    descricao:' Tecnologia inteligente para todas as fases do cultivo.',
}

const cards = [
    
    {
    iconeCard: assetsIcone + 'leaf.svg',
    tituloCard:'Sensor de Solo',
    descricaoCard:'Monitore a umidade, temperatura e nutrientes do solo em tempo real.',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'sensor.JPG',
}, 
    
    {
    iconeCard: assetsIcone + 'dispositivo.svg',
    tituloCard:'Monitoramento de Estufas',
    descricaoCard:'Controle o ambiente da sua estufa em tempo real.',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'monitoramento.JPG',
},

{
    iconeCard: assetsIcone + 'umidade.svg',
    tituloCard:'Irrigação Inteligente',
    descricaoCard:'Acione a irrigação de forma automática e eficiente.',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'irrigacao.JPG',
},

{
    iconeCard: assetsIcone + 'grafico.svg',
    tituloCard:'Análise de Crescimento',
    descricaoCard:'Acompanhe o desenvolvimento das suas plantas.',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'analise.JPG',
},

{
    iconeCard: assetsIcone + 'dispositivo.svg',
    tituloCard:'Plataforma de Gestão',
    descricaoCard:'Visualize dados, receba alertas e tome decisões com facilidade',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'plataforma.JPG',
},

{
    iconeCard: assetsIcone + 'cloud.svg',
    tituloCard:'Estação Meteorológica',
    descricaoCard:'Dados climáticos precisos para um plantio mais seguro.',
    botaoCard:'Saiba mais',

    imagem: assetsImg + 'alertas.JPG',
},

]

const criarBanner=(objeto, indice)=>{

     function sectionBannerMain(bannerMain){
        bannerMain = document.createElement('section')
        return bannerMain
    }; let bannerMain = sectionBannerMain();    

    const criarBannerMain=()=>{
        trocarBannerMain(bannerMain,indice);
    };criarBannerMain();    

    function trocarBannerMain(bannerMain,indice){   
        
        bannerMain.innerHTML = `
            <header>
                <div>
                    <span>${objeto.categoria}</span>
                    <h2>${objeto.titulo}</h2>
                    <p>${objeto.descricao}</p>
                </div>

                <div class="botoesBannerCard">
                    <button id='anterior'> < </button>
                    <button id='proximo'> > </button>
                </div>
            </header>

            <div class="mainBannerCard">
                <div class="corpoCardBannerCard">
                    <div>
                        <img src='${cards[indice].iconeCard}'>
                        <h3>${cards[indice].tituloCard}</h3>
                    </div>   

                    <div>
                        <p>${cards[indice].descricaoCard}</p>
                        <a class="saibaMais" href='/src/paginas/solucoes/solucoes.html'>${cards[indice].botaoCard}</a>
                        
                    </div>
                </div>
                
                <div class="conteinerImagemBannerCard"> 
                    <div>
                        <img src='${cards[indice].imagem}'>
                    </div>
                </div>
            </div>`; 

         let proximo = bannerMain.querySelector('#proximo');
            proximo.addEventListener('click', function(){
                indice++;
            if(indice >=3 ){indice = 0}
            console.log(indice)
            trocarBannerMain(bannerMain,indice);
        });

        let anterior = bannerMain.querySelector('#anterior');
            anterior.addEventListener('click', function(){
            indice--
            if(indice < 0){indice = 3}
            console.log(indice)
            cards[indice];
            trocarBannerMain(bannerMain,indice);
        });
    }
        bannerCard.appendChild(bannerMain)
    }

 
if(bannerCard){criarBanner(header,indice)};

};bannerCardIniciar();