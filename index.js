let questionCount = 0;

function addQuestion() {
    questionCount++;
    let form = document.querySelector('#questionForm');
    let div = document.createElement('div');
    div.classList.add('questionItem');
    let question = document.createElement('input');
    question.setAttribute('type', 'text');
    question.placeholder = 'Введите вопрос';
    question.setAttribute('value','question');
    div.insertAdjacentElement('beforeend', question);
    let typeArray = [getRadioElement('radio'), getRadioElement('checkbox'), getRadioElement('text')];
    for (let element of typeArray) {
        element.setAttribute('value','itemType');
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
                    let span = document.createElement('span');
                    span.textContent = answerCount.toString();
                    let input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    questionDiv.insertAdjacentElement('beforeend', span);
                    questionDiv.insertAdjacentElement('beforeend', input);
                    answerContainer.insertAdjacentElement('beforeend', questionDiv);
                    div.insertAdjacentElement('beforeend', answerContainer);
                });
                answerContainer.insertAdjacentElement('beforeend', button);
                if (!div.querySelector('#answerContainer')) {
                    div.insertAdjacentElement('beforeend', answerContainer);
                }
            }
            else {
                div.querySelector('#answerContainer').remove();
            }
        });
        div.insertAdjacentElement('beforeend', element);
    }
    form.insertAdjacentElement('beforeend', div);
    document.body.insertAdjacentElement('beforeend', form)
}

function getRadioElement(text) {
    let label = document.createElement('label');
    label.textContent = text;
    let radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'questionType' + questionCount);
    if (text === 'radio' || text === 'checkbox') {
        label.setAttribute('needAnswers', 'true')
    } else {
        label.setAttribute('needAnswers', 'false')
    }
<<<<<<< HEAD
    label.insertAdjacentElement('afterbegin', radioInput)
=======
    label.setAttribute('itemType', text);
    label.insertAdjacentElement('afterbegin', radioInput);
>>>>>>> origin/startForm
    return label;
}

