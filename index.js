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
                    input.setAttribute('type', 'text');
                    input.setAttribute('name', 'answer' + answerCount);
                    questionDiv.insertAdjacentElement('beforeend', span);
                    questionDiv.insertAdjacentElement('beforeend', input);
                    answerContainer.insertAdjacentElement('beforeend', questionDiv);
                    div.insertAdjacentElement('beforeend', answerContainer);
                });
                let deleteButton = document.createElement('button');
                deleteButton.setAttribute('type', 'button')
                deleteButton.textContent = 'Удалить последний ответ';
                deleteButton.addEventListener('click', () => {
                    let lastChild = answerContainer.lastChild;
                    if (lastChild.tagName === 'DIV') {
                        lastChild.remove();
                        answerCount--;
                    }
                })
                answerContainer.insertAdjacentElement('beforeend', button);
                answerContainer.insertAdjacentElement('beforeend', deleteButton);
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

function deleteLastQuestion() {
    let questions = document.querySelectorAll('.questionItem');
    questions[questions.length - 1].remove();
    if (questions){
        questionCount--;
    }
}

