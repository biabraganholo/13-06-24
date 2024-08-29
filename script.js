const perguntas = [
    {
        enunciado: "qual sua cor favorita?",
        alternativas: [
            { texto: "azul cereja!", pontuacao: 1 },
            { texto: "verde cachorrao!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "qual sua comida preferida?",
        alternativas: [
            { texto: "pao peidao.", pontuacao: 2 },
            { texto: "feijao diarreia.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "qual seu trabalho?",
        alternativas: [
            { texto: "rodar bolcinha.", pontuacao: 2 },
            { texto: "dama de luxo.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "E agora?",
        alternativas: [
            { texto: "boyceta.", pontuacao: 1 },
            { texto: "ciss.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "vc defecou hoje?",
        alternativas: [
            { texto: "sim, duas vezes.", pontuacao: 1 },
            { texto: "nao, apenas uma bufa.", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta



