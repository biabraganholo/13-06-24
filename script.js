const perguntas = [
    {
    enunciado: "Assim que saiu da escola você se depara com um cachorro. O que você faz?",
    alternativas: [
    "ignora",
    "faz carrinho no cachorro" 
    ]
    },
    {
    enunciado: " Depois, você vai para casa. Qual atitude você toma?",
    alternativas: [
    "ir para casa caminhando",
    "ir para casa de onibus" 
    ]
    },
    {
    enunciado: " Vocẽ chega em casa e sua mãe já esta com o almoço pronto, o que vocễ vai comer ?",
    alternativas: [
    "arroz com feijão",
    "feijão com arroz"
    ]
    },
    {
    enunciado: "Apos almoçar o que você vai fazer?",
    alternativas: [
    "estudar",
    "mecher no cell"
    ]
    
    },
    {
    enunciado: "Já esta de noite e você esta com muito sono, o que você faz?",
    alternativas: [
    "vou tomar banho para depois dormir",
    "ir dormir sem tomar banho"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o seu dia!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
