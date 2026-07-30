/**
 * ====================================================================
 * ARQUIVO: script.js
 * DESCRIÇÃO: Código JavaScript para interatividade da página.
 * ====================================================================
 */

// ====================================================================
// 1. BOTÃO "ENVIAR MENSAGEM" (exibe um alerta)
// ====================================================================

/*
   document.getElementById('botao-mensagem') → localiza o elemento
   HTML com o id="botao-mensagem" (o botão de contato).
*/
const botaoContato = document.getElementById('botao-mensagem');

/*
   Verifica se o botão realmente existe (boa prática para evitar erros).
   Se existir, adiciona um "ouvinte" para o evento de clique.
*/
if (botaoContato) {
    /*
      addEventListener('click', function() { ... }) → registra uma
      função que será executada toda vez que o botão for clicado.
    */
    botaoContato.addEventListener('click', function() {
        /*
          alert() → exibe uma caixa de diálogo com a mensagem.
          ⚠️ CORRIGIDO: Agora a mensagem é mais descritiva.
        */
        alert('📨 Mensagem enviada com sucesso! Entraremos em contato em breve.');
    });
} else {
    // Se o botão não for encontrado, exibe um erro no console.
    console.error('⚠️ Elemento #botao-mensagem não encontrado!');
}

// ====================================================================
// 2. ATUALIZAR TÍTULO COM textContent
// ====================================================================

/*
   Localiza o elemento com id="titulo" (o h2 que será modificado).
*/
const titulo = document.getElementById('titulo');

if (titulo) {
    /*
      textContent → altera o texto do elemento, ignorando tags HTML.
      É mais seguro que innerText em alguns casos.
      ⚠️ CORRIGIDO: Unifiquei as duas alterações anteriores em uma única
         para evitar conflito e tornar o código mais claro.
    */
    titulo.textContent = '🌟 Título atualizado pelo JavaScript!';
} else {
    console.error('⚠️ Elemento #titulo não encontrado!');
}

// ====================================================================
// 3. CRIAR UM NOVO PARÁGRAFO DINAMICAMENTE
// ====================================================================

/*
   document.createElement('p') → cria um novo elemento <p> em memória.
*/
const novoParagrafo = document.createElement('p');

/*
   innerText → define o texto do parágrafo recém-criado.
*/
novoParagrafo.innerText = '📌 Este parágrafo foi criado dinamicamente!';

/*
   Localiza o elemento <div> com id="conteudo" (container vazio).
*/
const container = document.getElementById('conteudo');

if (container) {
    /*
      appendChild(novoParagrafo) → adiciona o parágrafo como filho
      do container, ou seja, ele aparecerá dentro da div.
    */
    container.appendChild(novoParagrafo);
} else {
    console.error('⚠️ Elemento #conteudo não encontrado!');
}

// ====================================================================
// 4. ALTERAR COR DA CAIXA (alternando entre azul e vermelho)
// ====================================================================

/*
   Localiza o botão com id="botao" e a caixa com id="caixa".
*/
const botaoCor = document.getElementById('botao');
const caixa = document.getElementById('caixa');

if (botaoCor && caixa) {
    /*
      Variável para controlar o estado atual da cor.
      Inicialmente a caixa está azul (conforme definido no style inline).
    */
    let corAzul = true; // true = azul, false = vermelho

    /*
      Adiciona um evento de clique ao botão. A cada clique, alterna a cor.
    */
    botaoCor.addEventListener('click', function() {
        if (corAzul) {
            caixa.style.backgroundColor = 'red';
            corAzul = false;
        } else {
            caixa.style.backgroundColor = 'blue';
            corAzul = true;
        }
    });
} else {
    console.error('⚠️ Elementos #botao ou #caixa não encontrados!');
}

// ====================================================================
// 5. ALTERAR O PRIMEIRO ITEM DE UMA LISTA
// ====================================================================

/*
   Localiza a lista com id="lista".
*/
const lista = document.getElementById('lista');

if (lista) {
    /*
      children[0] → acessa o primeiro filho da lista (primeiro <li>).
    */
    const primeiroItem = lista.children[0];

    if (primeiroItem) {
        // Altera o texto do primeiro item.
        primeiroItem.innerText = '✅ Primeiro item atualizado';
    } else {
        console.error('⚠️ A lista está vazia!');
    }
} else {
    console.error('⚠️ Elemento #lista não encontrado!');
}

// ====================================================================
// MENSAGEM NO CONSOLE PARA INDICAR QUE O SCRIPT FOI CARREGADO
// ====================================================================
console.log('✅ script.js carregado com sucesso!');

//Rolagem	de	uma	página	pode	acionar	mudanças	visuais	ou	carregar	conteúdo adicional
window.addEventListener('scroll', function() {
     console.log('Rolagem detectada! Posição Y:', window.scrollY);
}); 

//Alterar	a	cor	de fundo	de	um	elemento	ao	passar	o	mouse	sobre	ele
const caixa = document.getElementById('caixa');
caixa.addEventListener('mouseover', function() {
    caixa.style.backgroundColor = 'green';
});
caixa.addEventListener('mouseout', function() {
    caixa.style.backgroundColor = 'blue';
}); 

//Formulário	de	contato:	verificar	se	o	campo	nome	está	preenchido	antes	de	enviar
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const nome = document.getElementById('nome').value.trim();
    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        document.getElementById('form-contato').reset(); // Limpa o formulário
    }
}); 
