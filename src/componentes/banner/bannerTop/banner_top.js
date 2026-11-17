let bannerHome = document.querySelector('#banner_top.home');

const bannerSolucoes = document.querySelector('#banner_top.solucoes');

const bannerSetores = document.querySelector('#banner_top.setores');

const bannerBeneficios = document.querySelector('#banner_top.beneficios');

const bannerBlog = document.querySelector('#banner_top.blog');

const bannerComoFunciona = document.querySelector('#banner_top_comoFunciona')



const bannerPrincipal = {
home: {
    categoria: 'TECNOLOGIA A FAVOR DO CRESCIMENTO',
    titulo: `Cultive melhor. `,
    destaque: 'Decida com dados',
    descricao: 'Soluções IoT que monitoram o ambiente, orientam o manejo e aumentam a produtividade de plantas, hortaliças e flores.'
},

comoFunciona: {
    categoria:'DO CAMPO AO RESULTADO',
    titulo:'Como funciona na ',
    destaque:'prática',
    descricao:'Da instalação dos sensores à análise dos dados, tudo de forma simples, integrada e sem complicação.',
},

solucoes:{
    categoria:'NOSSAS SOLUÇÕES',
    titulo:'Tecnologia completa para o ',
    destaque:'seu cultivo.',
    descricao:'Soluções IoT integradas que monitoram, analisam e orientam decisões para melhorar o desempenho da sua produção.'
},

setores:{
    categoria:'PARA DIFERENTES REALIDADES',
    titulo:'Soluções que se adaptam ao ',
    destaque:'seu setor',
    descricao:'Nossas soluções atendem diferentes tipos de cultivo, com configurações para cada necessidade.'
},

beneficios:{
    categoria:'MAIS EFICIÊNCIA PARA O SEU NEGÓCIO',
    titulo:'Benefícios que geram ',
    destaque:'resultados.',
    descricao:'Mais saúde para as plantas, menos desperdício e uma gestão do cultivo muito mais eficiente.',
},

blog:{
    categoria:'CONTEÚDO QUE FAZ A DIFERENÇA',
    titulo:'Aprenda, acompanhe e',
    destaque:' se atualize.',
    descricao:'Dicas, tendências e informações sobre tecnologia, cultivo e gestão'
}
}


const imprimirBanner=(variavelBanner, pagina)=>{
    let div = document.createElement('div');
    div.classList.add('conteudo_banner')
    div.innerHTML = `
    <span class='span_top'>${pagina.categoria}</span>
    <h1 id='titulo_banner'>${pagina.titulo}<span class='destaque_titulo'>${pagina.destaque}</span></h1>
    <p class="descricao_banner">${pagina.descricao}</p>`
    variavelBanner.appendChild(div);};

// Página inicial.
if(bannerHome){imprimirBanner(bannerHome, bannerPrincipal.home)};

// Como Funciona.
if(bannerComoFunciona){imprimirBanner(bannerComoFunciona, bannerPrincipal.comoFunciona)}

// Página soluções.
if(bannerSolucoes){imprimirBanner(bannerSolucoes, bannerPrincipal.solucoes)};

// Página setores.
if(bannerSetores){imprimirBanner(bannerSetores, bannerPrincipal.setores)};

// Página beneficios.
if(bannerBeneficios){imprimirBanner(bannerBeneficios, bannerPrincipal.beneficios)};

// Página blog.
if(bannerBlog){imprimirBanner( bannerBlog, bannerPrincipal.blog)};
