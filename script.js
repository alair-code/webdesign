// script.js    
const botao = document.getElementById('botao-mensagem'); // Seleciona o botão pelo ID   

botao.addEventListener('click', function() { // Adiciona um evento de clique ao botão
    alert('Mensagem enviada com sucesso!'); // Exibe um alerta quando o botão é clicado
});

//Usar o Java Script para atualizar um título
const titulo = document.getElementById('titulo'); // Seleciona o título pelo ID
titulo.textContent = 'Novo Título'; // Atualiza o texto do título   
