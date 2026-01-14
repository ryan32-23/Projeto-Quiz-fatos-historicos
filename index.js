import questoes from './ColecaoDeDados.js';
import entradaDados from 'readline-sync';


// Funções lógicas da aplicação //

function selecionarQuestoesAleatorias(questoes, quantidadeQuestoes) {
  const questoesAleatorias = questoes.sort(() => Math.random() - 0.5); 
  return questoesAleatorias.slice(0, quantidadeQuestoes); 
}

function exibirPergunta(pergunta, index) { 
  console.log(`\n${index + 1}: ${pergunta.pergunta}`);
  const respostaUsuario = entradaDados.question('Digite a resposta (ano): ');
  return respostaUsuario;
}

function validarRespostaDoUsuario(respostaDoUsuario, pergunta) { 
  return respostaDoUsuario === pergunta.resposta;
}

function exibirResultado(pontuacaoFinal, nomeJogador) { 
  let mensagem = '';

  if (pontuacaoFinal <= 3) {
    mensagem = 'OH NÃO! Tente mais uma vez.';
  } else if (pontuacaoFinal <= 6) {
    mensagem = 'BOM TRABALHO! Pratique um pouco mais.';
  } else if (pontuacaoFinal <= 9) {
    mensagem = 'MUITO BOM! Você acertou a maioria.';
  } else {
    mensagem = 'EXCELENTE! Você é um verdadeiro expert.';
  }

  console.log(`\nJogador(a): ${nomeJogador}`);
  console.log(`Pontuação final: ${pontuacaoFinal} acertos.`);
  console.log(mensagem);
}

//Interface da aplicação//

function iniciarQuiz() {
  console.log('--------QUIZ DE FATOS HISTÓRICOS--------\n');
  console.log('Seja Bem-vindo jogador(a)!');

  const nomeJogador = entradaDados.question('Digite o seu nome: ');
  const quantidadeQuestoes = 10;

  const questoesSelecionadas = selecionarQuestoesAleatorias(questoes, quantidadeQuestoes);   

  let pontuacaoFinal = 0;

  questoesSelecionadas.forEach((pergunta, index) => {
    const respostaUsuario = exibirPergunta(pergunta, index);
    const resultadoValidacao = validarRespostaDoUsuario(respostaUsuario, pergunta);

    if (resultadoValidacao) {
      console.log('Resposta correta!');
      pontuacaoFinal++;
    } else {
      console.log('Resposta errada!');
    }
  });

  exibirResultado(pontuacaoFinal, nomeJogador);
}

iniciarQuiz(); 