function calculateResult() {

    const answers = document.forms['vocationalTest'];

    let score = {

        esquizoide: 0,

        oral: 0,

        psicopata: 0,

        masoquista: 0,

        rigido: 0

    };

 

    // Verificar as respostas e acumular pontuações

    for (let i = 0; i < answers.length; i++) {

        if (answers[i].checked) {

            if (answers[i].value !== '0') {

                score[answers[i].value]++;

            }

        }

    }

 

    // Determinar o traço de caráter predominante

    let dominantTrait = "";

    let highestScore = 0;

 

    for (const trait in score) {

        if (score[trait] > highestScore) {

            highestScore = score[trait];

            dominantTrait = trait;

        }

    }

 

    // Exibir resultado

    const resultDiv = document.getElementById('result');

    let resultMessage = '';

 

    switch(dominantTrait) {

        case 'esquizoide':

            resultMessage = 'Seu traço predominante é Esquizoide. Áreas sugeridas: Carreiras inovadoras como design ou pesquisa.';

            break;

        case 'oral':

            resultMessage = 'Seu traço predominante é Oral. Áreas sugeridas: Carreiras colaborativas como ensino ou vendas.';

            break;

        case 'psicopata':
            resultMessage = 'Seu traço predominante é Psicopata . Áreas sugeridas: Liderança em áreas como gestão ou política.'
            break;
            case 'masoquista':
                resultMessage = 'Seu traço predominante é Masoquista. Áreas sugeridas: Trabalhos que exigem persistência, como engenharia.'
                break;
                case 'rigido':
                    resultMessage = 'Seu traço predominante é Rigido. Áreas sugeridas: Carreiras focadas em metas e desempenho, como advocacia.'
                    break;

        default:

            resultMessage = 'Não foi possível determinar o traço predominante. Tente responder mais perguntas.';

    }

 

    resultDiv.innerHTML = resultMessage;

}