
const mainHomeHeader = document.querySelector('#mainHeader.home');
const mainComoFuncionaHeader = document.querySelector('#mainHeader.comoFunciona');
const mainSistemaHeader = document.querySelector('#mainHeader.sistema');

const mainSetoresHeader = document.querySelector('#mainHeader.setores');

const mainSolucoesHeader = document.querySelector('#mainHeader.solucoes');



const paginas = {
home : {
    span:'PARA CADA TIPO DE NEGÓCIO UMA SOLUÇÃO',
    titulo:'Cultivo inteligente em diferentes realidades.',
    descricao:'Da jardinagem à produção em escala, nossas soluções se adaptam à sua operação.'
},

comoFunciona:{
    span:'DO CAMPO AO PAINEL',
    titulo:'Como funciona?',
    descricao:'Da coleta de dados à ação, tudo de forma simples e integrada.'
},

sistema:{
    span:'DADOS QUE GERAM RESULTADOS',
    titulo:'Tudo em um só lugar.',
    descricao:'Um painel completo, intuitivo e acessível de qualquer dispositivo, com os dados que realmente importam para o seu cultivo.',
},


solucoes:{
    span:'TECNOLOGIA A SEU FAVOR',
    titulo:'Tudo o que seu cultivo precisa.',
    descricao:'Da coleta de dados à tomada de decisão, uma solução integrada para cada etapa.',
},

setores:{
    span:'SOLUÇÕES PARA CADA SETOR',
    titulo:'Cada cultivo tem suas particularidades',
    descricao:'Da agricultura em larga escala ao cultivo em ambientes controlados, nossas soluções se adaptam às necessidades de cada setor.'
},

beneficios:{},

blog:{},

}

    const importarHeader=(pagina, arquivo)=>{
    let header = document.createElement('header');
    header.classList.add('flex_headerMain')
    header.innerHTML = `
    <div>
        <span class='span_top'>${arquivo.span}</span>
        <h2 class="titulo_h2">${arquivo.titulo}</h2>
    </div>
    
    <p clas="descricao_mainHeader">${arquivo.descricao}</p>
    `
    pagina.appendChild(header);
    }

// Página Home
if(mainHomeHeader){importarHeader(mainHomeHeader,paginas.home)};

if(mainComoFuncionaHeader){importarHeader(mainComoFuncionaHeader,paginas.comoFunciona)}

if(mainSistemaHeader){importarHeader(mainSistemaHeader, paginas.sistema)}

// Página Soluções.
if(mainSolucoesHeader){importarHeader(mainSolucoesHeader, paginas.solucoes)}

// Página Setores.
if(mainSetoresHeader){importarHeader(mainSetoresHeader, paginas.setores)}
