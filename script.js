// script.js    
const botao = document.getElementById('botao-mensagem'); // Seleciona o botão pelo ID   

botao.addEventListener('click', function() { // Adiciona um evento de clique ao botão
    alert('Mensagem enviada com sucesso!'); // Exibe um alerta quando o botão é clicado
});

//Usar o Java Script para atualizar um título
const titulo = document.getElementById('titulo'); // Seleciona o título pelo ID
titulo.textContent = 'Novo Título'; // Atualiza o texto do título   

//localizar	o	elemento	pelo	seu	id	e	atualizar	seu conteúdo	usando	o	método	innerText
document.getElementById('titulo').innerText='Texto atualizado com JavaScript';

//Criar	um	novo parágrafo	e	adicioná-lo	a	uma	seção	existente:
const novaDiv = document.creatElement('p')//cria novo parágrafo
novaDiv.innerText ='Este parágragrafo foi criado dinamicamente!';
document.getElementById('conteudo').appendChild(novaDiv); //Adiciona o parágrafo a div existente

//Alterar	a	cor	de	fundo	de	um	elemento	ao	clicar	em um	botão:
document.getElementById('botao').addEventListener('click', function()	{
     document.getElementById('caixa').style.backgroundColor =	'red'; });