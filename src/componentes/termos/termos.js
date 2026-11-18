const privacidade = document.querySelector('.privacidade');
const termosDeUso = document.getElementById('termosDeUso');
const cookies = document.getElementById('cookies');

const privacidadeTexto=()=>{
    return `
        <h2>Política de Privacidade</h2>
        <small>Última atualização: novembro de 2026</small>

        <p>
            A HYDROTIME respeita a privacidade de seus visitantes e se compromete
            a tratar suas informações com responsabilidade e transparência.
            Esta política explica quais dados podem ser coletados durante a
            utilização do nosso site e como eles são utilizados.
        </p>

        <h3>1. Quais informações coletamos?</h3>
        <p>Ao preencher nosso formulário de contato, podemos solicitar:</p>
        <ul>
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>Número de telefone;</li>
            <li>Setor de atuação;</li>
            <li>Interesse em nossos produtos e serviços;</li>
            <li>Descrição da necessidade ou solicitação.</li>
        </ul>

        <p>
            Também podemos receber informações de localização, como CEP,
            cidade e estado, quando você utiliza nossa ferramenta de consulta.
        </p>

        <h3>2. Como utilizamos suas informações?</h3>
        <p>Os dados fornecidos são utilizados para:</p>
        <ul>
            <li>Responder dúvidas e solicitações;</li>
            <li>Entrar em contato com visitantes e potenciais clientes;</li>
            <li>Apresentar soluções compatíveis com suas necessidades;</li>
            <li>Agendar demonstrações;</li>
            <li>Oferecer suporte técnico e comercial;</li>
            <li>Melhorar nossos serviços e a experiência de navegação.</li>
        </ul>

        <h3>3. Compartilhamento de informações</h3>
        <p>
            A HYDROTIME não comercializa informações pessoais. Os dados
            poderão ser processados por serviços tecnológicos utilizados
            para o funcionamento do site e atendimento das solicitações,
            respeitando as finalidades previstas nesta política.
        </p>

        <h3>4. Segurança e armazenamento</h3>
        <p>
            Adotamos medidas para proteger as informações contra acessos
            não autorizados, alterações, perdas ou divulgação indevida.
            Os dados são mantidos pelo período necessário para atender
            às finalidades da coleta e às obrigações legais aplicáveis.
        </p>

        <h3>5. Seus direitos</h3>
        <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD),
            você possui direitos sobre suas informações pessoais, incluindo:
        </p>
        <ul>
            <li>Solicitar acesso aos seus dados;</li>
            <li>Corrigir informações incompletas ou desatualizadas;</li>
            <li>Solicitar a exclusão de dados, quando aplicável;</li>
            <li>Obter informações sobre o compartilhamento;</li>
            <li>Solicitar a revogação do consentimento, quando aplicável.</li>
        </ul>

        <h3>6. Contato</h3>
        <p>
            Caso tenha dúvidas ou queira realizar alguma solicitação
            relacionada aos seus dados pessoais, entre em contato:
        </p>

        <p>
            <strong>E-mail:</strong>
            <a href="mailto:contato@hydrotime.com.br">
                contato@hydrotime.com.br
            </a>
        </p>
    `;
};

const termosTexto=()=>{
    return `
        <h2>Termos de Uso</h2>
        <small>Última atualização: novembro de 2026</small>

        <p>
            Bem-vindo à HYDROTIME! Ao acessar e utilizar nosso site,
            você concorda com as condições estabelecidas nestes Termos
            de Uso. Recomendamos a leitura das informações a seguir.
        </p>

        <h3>1. Sobre o site</h3>
        <p>
            O site da HYDROTIME tem como objetivo apresentar informações
            institucionais, produtos, tecnologias e soluções relacionadas
            ao monitoramento, controle e automação de ambientes.
        </p>

        <h3>2. Utilização do conteúdo</h3>
        <p>
            Os textos, imagens, elementos gráficos, identidade visual e
            demais materiais disponibilizados neste site são protegidos
            pela legislação aplicável de propriedade intelectual.
        </p>
        <p>
            Não é permitido reproduzir, distribuir, modificar ou utilizar
            comercialmente esses materiais sem autorização prévia.
        </p>

        <h3>3. Responsabilidades do usuário</h3>
        <p>Ao utilizar nosso site, você concorda em:</p>
        <ul>
            <li>Fornecer informações verdadeiras nos formulários;</li>
            <li>Não utilizar o site para atividades ilícitas;</li>
            <li>Não tentar comprometer a segurança ou o funcionamento da plataforma;</li>
            <li>Respeitar os direitos de propriedade intelectual da HYDROTIME.</li>
        </ul>

        <h3>4. Informações e disponibilidade</h3>
        <p>
            Buscamos manter as informações do site atualizadas e acessíveis.
            Entretanto, poderão ocorrer alterações de conteúdo,
            indisponibilidades temporárias ou atualizações sem aviso prévio.
        </p>
        <p>
            As informações apresentadas possuem caráter informativo e não
            substituem uma avaliação técnica específica para cada projeto.
        </p>

        <h3>5. Links externos</h3>
        <p>
            Nosso site poderá apresentar links para plataformas e serviços
            de terceiros. A HYDROTIME não se responsabiliza pelos conteúdos,
            políticas ou práticas de privacidade desses ambientes externos.
        </p>

        <h3>6. Alterações dos termos</h3>
        <p>
            Estes Termos de Uso poderão ser atualizados sempre que necessário,
            visando acompanhar mudanças nos serviços e no funcionamento
            da plataforma.
        </p>
        <p>
            Recomendamos consultar esta página periodicamente para acompanhar
            possíveis alterações.
        </p>

        <h3>7. Contato</h3>
        <p>
            Para dúvidas ou esclarecimentos relacionados a estes termos,
            entre em contato conosco:
        </p>

        <p>
            <strong>E-mail:</strong>
            <a href="mailto:contato@hydrotime.com.br">
                contato@hydrotime.com.br
            </a>
        </p>
    `;
};
const cookiesTexto=()=>{
     return `
        <h2>Política de Cookies</h2>
        <small>Última atualização: novembro de 2026</small>

        <p>
            A HYDROTIME utiliza tecnologias de armazenamento e identificação,
            conhecidas como cookies, para melhorar a experiência de navegação
            e contribuir para o funcionamento adequado do site.
        </p>

        <h3>1. O que são cookies?</h3>
        <p>
            Cookies são pequenos arquivos armazenados no dispositivo do
            visitante durante a navegação. Eles permitem registrar
            determinadas informações e preferências para melhorar
            experiências futuras no site.
        </p>

        <h3>2. Tipos de cookies</h3>

        <p><strong>Cookies necessários</strong></p>
        <p>
            São essenciais para o funcionamento adequado do site e de
            suas funcionalidades principais.
        </p>

        <p><strong>Cookies de preferência</strong></p>
        <p>
            Permitem armazenar configurações e escolhas realizadas pelo
            visitante, proporcionando uma navegação mais personalizada.
        </p>

        <p><strong>Cookies analíticos</strong></p>
        <p>
            Podem ser utilizados para compreender como os visitantes
            interagem com o site, identificando oportunidades de melhoria.
        </p>

        <p><strong>Cookies de publicidade</strong></p>
        <p>
            Podem ser utilizados para apresentar conteúdos e anúncios
            relacionados aos interesses dos visitantes.
        </p>

        <h3>3. Gerenciamento de cookies</h3>
        <p>
            Você pode configurar seu navegador para bloquear, limitar
            ou excluir cookies armazenados em seu dispositivo.
            Entretanto, a desativação de determinados cookies poderá
            afetar o funcionamento de algumas funcionalidades do site.
        </p>

        <h3>4. Cookies de terceiros</h3>
        <p>
            Alguns serviços externos integrados ao site poderão utilizar
            suas próprias tecnologias de armazenamento e coleta de
            informações, conforme suas respectivas políticas de privacidade.
        </p>

        <h3>5. Atualizações</h3>
        <p>
            Esta Política de Cookies poderá ser atualizada para refletir
            mudanças nas tecnologias utilizadas ou nas práticas de
            funcionamento do site.
        </p>

        <h3>6. Contato</h3>
        <p>
            Para dúvidas relacionadas ao uso de cookies e à privacidade,
            entre em contato conosco:
        </p>

        <p>
            <strong>E-mail:</strong>
            <a href="mailto:contato@hydrotime.com.br">
                contato@hydrotime.com.br
            </a>
        </p>
    `;
}
    

const modalTermos = (funcao) => {
    const fundoModal = document.querySelector('.fundoModal');

    fundoModal.style.display = 'block';

    // Remove modal anterior, caso exista
    document.querySelector('.modal')?.remove();

    let conteudo = document.createElement('div');
    conteudo.classList.add('modal');

    conteudo.innerHTML = `
        <div id="fechar">
            <img src="/src/assets/icones/x.svg">
        </div>

        <div class="conteudo-modal">
            ${funcao}
        </div>
    `;

    fundoModal.appendChild(conteudo);

    const fechar = conteudo.querySelector('#fechar');

    fechar.addEventListener('click', () => {
        conteudo.remove();
        fundoModal.style.display = 'none';
    });
};

window.iniciarTermos = () => {
    const privacidade = document.querySelectorAll('.privacidade');
    const termosDeUso = document.getElementById('termosDeUso');
    const cookies = document.getElementById('cookies');

    

    privacidade.forEach(elemento => {
    elemento.addEventListener('click', () => {
        modalTermos(privacidadeTexto());
    });
    });

    termosDeUso.addEventListener('click', () => {
        modalTermos(termosTexto());
    });

    cookies.addEventListener('click', () => {
        modalTermos(cookiesTexto());
    });
};