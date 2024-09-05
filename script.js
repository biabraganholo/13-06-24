const perguntas = [
    {
        enunciado: "qual sua cor favorita?",
        alternativas: [
            { texto: " azul!", pontuacao: 1 },
            { texto: "verde!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "qual numero vc prefere?",
        alternativas: [
            { texto: "12.", pontuacao: 2 },
            { texto: "7.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "qual sua fruta preferida?",
        alternativas: [
            { texto: "maça.", pontuacao: 2 },
            { texto: "laranja.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "qual?",
        alternativas: [
            { texto: "quimica.", pontuacao: 1 },
            { texto: "fisica.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "vc ama Jesus?",
        alternativas: [
            { texto: "sim muito.", pontuacao: 1 },
            { texto: "sim muitao.", pontuacao: 2 }
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
