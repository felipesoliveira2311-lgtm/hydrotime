const bannerMain=()=>{

    const bannerMainHome = document.querySelector('#banner_main.home');
    const bannerMainSetores = document.querySelector('#banner_main.setores');
    const bannerMainSolucoes = document.querySelector('#banner_main.solucoes')
    const assets = '/hydrotime-/src/assets/banner/'
    const paginas = {
        home:{

            titulo:'Vamos transformar o seu cultivo?',
            descricao:'Fale com um especialista e descubra como a tecnologia pode ajudar a sua empresa.',
            botao:'Solicitar demonstração',
        },

        setores:{
            titulo:'Não encontrou o seu setor?',
            descricao:'Também desenvolvemos soluções personalizadas para outras áreas de cultivo. Fale com nossa equipe.',
            botao:'Falar com um especialista',
        },

        solucoes:{
            titulo:'Muitos beneficios te aguardam, que tal uma conversa?',
            descricao:'Envie uma mensagem para o nosso time. Descubra como podemos te ajudar!.',
            botao:'Solicitar atendimento',
        },
    }

    const criarBanner=(variavel,pagina)=>{
        let div = document.createElement('div')
        div.classList.add('bannerMain')
        div.innerHTML = `
            <div>
                <h2 id='titulo_bannerMain'>${pagina.titulo}</h2>
                <p id='descricao_bannerMain'>${pagina.descricao}</p>
            </div>
            <a id="btn" href="/hydrotime-/src/paginas/formulario/formulario.html">${pagina.botao}</a>
        `
        let titulo = div.querySelector('#titulo_bannerMain');
        titulo.style.color = pagina.corTitulo;

        let descricao = div.querySelector('#descricao_bannerMain');
        descricao.style.color = pagina.corDescricao


        let botao = div.querySelector('#btn');
        botao.style.background = pagina.corFundoBotao;
        botao.style.color = pagina.corTextoBotao;

        variavel.appendChild(div); 
    }

    if(bannerMainHome){criarBanner(bannerMainHome,paginas.home)};

    if(bannerMainSetores){criarBanner(bannerMainSetores,paginas.setores)};

    if(bannerMainSolucoes){criarBanner(bannerMainSolucoes,paginas.solucoes)}

};bannerMain();