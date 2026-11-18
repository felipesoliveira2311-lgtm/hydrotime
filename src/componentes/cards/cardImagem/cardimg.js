const cardImg=()=>{

    const home = document.querySelector('#cardImg.home');
    const setores = document.querySelector('#cardImg.setores');

    const assetsImg = '/src/assets/imagens/imagens_setores/'

    const cardHome = [

        {

            imagem: assetsImg + 'paisagismo.png',
            titulo:'Empresas de paisagismo',
            descricao:'Monitore, áreas externas e projetos de paisagismo, com mais eficiência e previsibilidade',
            saibaMais:'Mais setores',
        },

        {
            imagem: assetsImg + 'floricultura.png',
            titulo:'Floriculturas',
            descricao:'Garanta o ambiente ideal para cada espécie e aumente a qualidade e a durabilidade das plantas.',
            saibaMais:'Mais setores',
        },
        
        {
            imagem: assetsImg + 'hortifruti.png',
            titulo:'Comércios e hortifrútis',
            descricao:'Monitore cultivos, estoques e ambientes de armazenamento, reduzindo perdas e mantendo a qualidade dos produtos.',
            saibaMais:'Mais setores',
        },
    ]

    const cardSetores = [

        {

            imagem: assetsImg + 'paisagismo.png',
            titulo:'Empresas de Paisagismo',
            descricao:'Monitore, áreas externas e projetos de paisagismo, com mais eficiência e previsibilidade',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'floricultura.png',
            titulo:'Floriculturas',
            descricao:'Garanta o ambiente ideal para cada espécie e aumente a qualidade e a durabilidade das plantas.',
            saibaMais:'',
        },
        
        {
            imagem: assetsImg + 'hortifruti.png',
            titulo:'Comércios e Hortifrútis',
            descricao:'Monitore cultivos, estoques e ambientes de armazenamento, reduzindo perdas e mantendo a qualidade dos produtos.',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'viveiros.png',
            titulo:'Viveiros de Mudas',
            descricao:'Acompanhe as condições ambientais para favorecer o desenvolvimento saudável das mudas.',
            saibaMais:''
        },

        {
            imagem: assetsImg + 'agriculturaFamiliar.png',
            titulo:'Agricultura Familiar',
            descricao:'Tecnologia acessível para pequenos produtores, facilitando o monitoramento e o cuidade diário com as plantações',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'cultivoIndoor.png',
            titulo:'Cultivo Indoor',
            descricao:'Monitore temperatura, luminosidade e umidade para acompanhar cultivos em ambientes fechados.',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'fruticultura.png',
            titulo:'Fruticultura',
            descricao:'Acompanhe as condições do cultivo e tome decisões mais informadas sobre o cuidado com árvores frutíferas.',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'hortasUrbanas.png',
            titulo:'Hortas Urbanas',
            descricao:'Mais praticidade para acompanhar pequenas hortas em residências, condomínios e espaços comunitários.',
            saibaMais:'',
        },

        {
            imagem: assetsImg + 'plantasOrnamentais.png',
            titulo:'Plantas Ornamentais',
            descricao:'Monitore as necessidades ambientais de diferentes espécies e preserve a qualidade das plantas.',
            saibaMais:'',
        }




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
                    <div class='conteudo_card'>
                        <h3 class='h3_card'>${card.titulo}</h3>
                        <p class="descricao_card">${card.descricao}</p>
                    </div>
                        <a class="mais" href="/src/paginas/setores/setores.html">${card.saibaMais}</a>
                   
                    `
                pagina.appendChild(article)
            }) 
            return pagina
        };
// Página home.
    if(home){criarCard(home,cardHome)}

// Página setores.
    if(setores){criarCard(setores,cardSetores)}
        
};cardImg();