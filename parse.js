let source = [
    {type : 'radio', answer : ['a', 'b'], question : '11'},
    {type : 'text', answer : [''], question : '222'},
    {type : 'checkBox', answer : ['n', 'nn', 'nnn'], question : '333'}];

let form = document.querySelector('.mainForm');

for(let i = 0; i < source.length; i++) {
    let div = document.createElement('div');
    form.append(div);
    let question = document.createTextNode(source[i].question);
    div.append(question);
    for(let j = 0; j < source[i].answer.length; j++) {
        let answer = document.createElement('input');
        switch (source[i].type) {
            case 'radio' :
                answer.type = 'radio';
                answer.name = `answerR${i}`;
                answer.value = `${source[i].answer[j]}`;
                break;
            case 'checkBox' :
                answer.type = 'checkBox';
                answer.name = `answerCH${i}`;
                answer.value = `${source[i].answer[j]}`;
                break;
            case 'text' :
                answer.type = 'text';
                answer.name = 'textAnswer';
                break;
        }
        let label = document.createElement('label');
        label.append(answer)
        if(source[i].type !== 'text')
        {
            label.append(`${source[i].answer[j]}`);
        }
        div.append(label);
    }
}

let submit = document.createElement('input');
submit.type = 'submit';
form.append(submit);