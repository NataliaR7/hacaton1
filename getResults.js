let source = [
    {
        question: '11',
        data: [{type: 'radio', answer: ['a'], countAnswers: 6},
        {type: 'radio', answer: ['b'], countAnswers: 0},
        {type: 'radio', answer: ['c'], countAnswers: 7}]
    },
    {
        question: '222',
        data: [{type: 'text', answer: ["e", "ee", "eee"], countAnswers: 3}]
    }];

let body = document.querySelector('.results');
for(let i = 0; i < source.length; i++)
{
    let question = document.createElement('h2');
    question.append(source[i].question);
    body.append(question);
    for(let j = 0; j < source[i].data.length; j++)
    {
        if(source[i].data[j].type !== 'text')
        {
            let answer = document.createElement('p');
            answer.append(source[i].data[j].answer[0]);
            let count = document.createElement('p');
            count.append(source[i].data[j].countAnswers);
            body.append(answer, count);
        }
        else
        {
            let count = document.createElement('p');
            count.append("Количество ответов: ", source[i].data[j].countAnswers);
            let answers = document.createElement('p');
            answers.append(source[i].data[j].answer);
            body.append(count, answers);
        }
    }
}

// let questionsMap = new Map();
// for (let i = 0; i < source.length; i++) {
//     if(!questionsMap.has(source[i].question))
//     {
//         questionsMap.set(source[i].question, [source[i]]);
//     }
//     else
//     {
//         questionsMap[source[i].question].push(source[i]);
//     }
// }
//
// let body = document.querySelector('.results');
//
// for(let key of questionsMap.keys())
// {
//     let question = document.createTextNode(key);
//     body.append(question);
//     for(let arr of source.get(key))
//     {
//
//     }
// }