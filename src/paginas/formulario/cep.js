const capturarCEP = [document.getElementById('btn_cep'), document.getElementById('btn_cep_media')];
const cep = document.getElementById('cep');
let rua = document.getElementById('rua');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');
let telefone = document.getElementById('telefone')

let valorCEP;

const noText = (campo) =>{    
    campo.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');     
})};
noText(cep);
noText(telefone)



const alertas=()=>{
    cep.addEventListener('input')
} 

capturarCEP.forEach((botao) => {
botao.addEventListener('click', ()=>{
    if(cep.value.length != 8 ){
        alert('O campo deve conter 8 digitos.')
        this.preventDefault();

    }

    
    valorCEP = cep.value
    console.log(valorCEP)

    console.log(fetch(`https://viacep.com.br/ws/${valorCEP}/json/`).then(resposta => resposta.json()).then(dados =>{
        if(dados.erro){alert('digite um endereço válido')}
        console.log(dados)
         rua.value =  dados.logradouro;
         bairro.value = dados.bairro;
         cidade.value = dados.localidade;
         estado.value = dados.estado;

    }).catch(erro =>{alert('Erro de conexão, tente novamente.'); console.log(erro)}))
});
});