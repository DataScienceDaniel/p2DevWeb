
if (!sessionStorage.getItem('log')){
    alert("Acesso não autorizado")
    window.location = '/';
}

const foto = document.getElementById('foto');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao');
const nascimento = document.getElementById('nascimento');
const altura = document.getElementById('altura');
const posicao = document.getElementById('posicao');
const botaoVoltar = document.getElementById('botaoVoltar');

botaoVoltar.onclick = () => window.location = '/atletas.html';

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const obterDadosEPopular = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const url = "https://botafogo-atletas.mange.li/" + parametros.get('id');

    const atleta = await pegar_coisas(url);

    descricao.innerHTML = atleta.descricao;
    nome.innerText = atleta.nome_completo;
    nascimento.innerText = `Data de Nascimento: ${atleta.nascimento}`;
    altura.innerText = `Altura: ${atleta.altura}`;
    foto.src = atleta.imagem;

}

obterDadosEPopular();