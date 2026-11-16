const form = document.getElementById('preenchimento_dados')
const nome = document.getElementById('name');
const email = document.getElementById('email');
const numero = document.getElementById('telefone');
const setor  = document.getElementById('setor');
const interesse = document.getElementById('interesse');
const descreva = document.getElementById('descreva');
const capturar = document.getElementById('btn_enviar');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const confirmacao=()=>{
        
        document.querySelector('.fundo-modal-form').style.display = "block";

        let recebido = document.getElementById('recebido');
        let conteudo = document.createElement('div');
        conteudo.classList.add('modalForm');
        conteudo.innerHTML =  `
            <img id="ok" src="/hydrotime-/src/assets/icones/recebido.svg">
            <p>
                Em instantes você receberá um e-mail de confirmação!
            </p>

            <div id="fechar"><img src='/hydrotime-/src/assets/icones/x.svg'></div>
            `

            recebido.appendChild(conteudo);

            if(conteudo){
                fechar = recebido.querySelector('#fechar').addEventListener('click', function(){

                    recebido.remove();
                    location.reload();
                }   
            )}
                    console.log(recebido)
                    console.log(conteudo)

                   

            };confirmacao();

    const dados = {
        name: nome.value,
        email: email.value,
        telefone: numero.value,
        setor: setor.value,
        interesse: interesse.value,
        descreva: descreva.value
    };

    try {

        // Notificação para a HYDROTIME
        await emailjs.send(
            'service_88hf3oi',
            'template_1jlrd07',
            dados
        );

        // Confirmação para o cliente
        await emailjs.send(
            'service_88hf3oi',
            'template_qw7a57h',
            {
                name: dados.name,
                email: dados.email
            }
        );

        console.log('E-mails enviados com sucesso!');

    } catch (erro) {
        console.error('Erro ao enviar:', erro);
    }

    
            

        })
            
            
            
   
// });
  