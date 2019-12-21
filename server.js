import express from "express";
import WebSocket from "ws";


const app = express();

app.use(express.static(path.join(process.cwd(), "client")));

app.get("/setResults", (req, res) => {
    console.log(req);
});

app.get("/*", (_, res) => {
    res.send("Place(holder)");
});

const server = app.listen(port);


let questions = new Map();

const wss = new WebSocket.Server({
    noServer: true
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
    });
    ws.on('getResults', function getResults(idQ) {
        ws.send(questions.get(idQ));
    });
    ws.on('putResult', function put(idQ, answer) {
        let answ = JSON.parse(answer);
        if(questions.has(idQ)){

        } else {
            questions.set(idQ, answ);
        }
    });
    const mas = {type: 'field', payload: ''};
    ws.send(JSON.stringify(mas));
});

let obj = {
    idQ: '',
    answer: {question: '',
            answerQ: []}
};

let obj1 = {
    questions: [],
    answers: {
        question: '',
        answers: []
    }
};