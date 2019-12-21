let questionCount = 0;

function addQuestion() {
    questionCount++;
    console.log(questionCount);
    let id = Math.random().toString().slice(2);
    let quizId = document.createElement('input');
    quizId.setAttribute('name', 'quizId');
    quizId.setAttribute('type', 'hidden');
    quizId.setAttribute('value', id);
    let form = document.querySelector('#questionForm');
    let div = document.createElement('div');
    div.classList.add('questionItem');
    let question = document.createElement('input');
    question.setAttribute('type', 'text');
    question.placeholder = 'Введите вопрос';
    question.setAttribute('name', 'question');
    let closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add('closeButton');
    closeButton.addEventListener('click', () => {
            div.remove();
            if (questionCount !== 0)
                questionCount--;
        }
    );
    div.insertAdjacentElement('beforeend', closeButton);
    div.insertAdjacentElement('beforeend', question);
    let typeArray = [getRadioElement('radio'), getRadioElement('checkbox'), getRadioElement('text')];
    for (let element of typeArray) {
        element.setAttribute('value', 'itemType');
        element.addEventListener('change', () => {
            if (element.getAttribute('needAnswers') === 'true') {
                let answerContainer = document.createElement('div');
                answerContainer.setAttribute('id', 'answerContainer');
                answerContainer.textContent = 'Ответы:';
                let answerCount = 0;
                let button = document.createElement('button');
                button.textContent = 'Добавить ответ';
                button.setAttribute('type', 'button');
                button.addEventListener('click', () => {
                    answerCount++;
                    let questionDiv = document.createElement('div');
                    questionDiv.style.marginTop = '10px'
                    let span = document.createElement('span');
                    span.textContent = answerCount.toString() + '.';
                    let input = document.createElement('input');
                    let deleteQuestionButton = document.createElement('button');
                    deleteQuestionButton.setAttribute('type', 'button');
                    deleteQuestionButton.classList.add('closeButton');
                    deleteQuestionButton.addEventListener('click', () => {
                        questionDiv.remove()
                        if (questionCount !== 0)
                            questionCount--;
                    })
                    input.setAttribute('type', 'text');
                    input.setAttribute('name', 'answer' + answerCount);
                    questionDiv.insertAdjacentElement('beforeend', span);
                    questionDiv.insertAdjacentElement('beforeend', input);
                    questionDiv.insertAdjacentElement('beforeend', deleteQuestionButton);
                    answerContainer.insertAdjacentElement('beforeend', questionDiv);
                    div.insertAdjacentElement('beforeend', answerContainer);
                });
                answerContainer.insertAdjacentElement('beforeend', button);
                if (!div.querySelector('#answerContainer')) {
                    div.insertAdjacentElement('beforeend', answerContainer);
                }
            } else {
                div.querySelector('#answerContainer').remove();
            }
        });
        div.insertAdjacentElement('beforeend', element);
    }
    form.insertAdjacentElement('beforeend', div);
    document.body.insertAdjacentElement('beforeend', quizId)
    document.body.insertAdjacentElement('beforeend', form);
}

function getRadioElement(text) {
    let label = document.createElement('label');
    label.textContent = text;
    let radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'questionType');
    radioInput.setAttribute('value', text);
    if (text === 'radio' || text === 'checkbox') {
        label.setAttribute('needAnswers', 'true')
    } else {
        label.setAttribute('needAnswers', 'false')
    }
    label.setAttribute('value', text);
    label.insertAdjacentElement('afterbegin', radioInput);
    return label;
}

