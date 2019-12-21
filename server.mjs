import * as path from "path";
import express from "express";
import WebSocket from "ws";


const app = express();
const rootDir = process.cwd();

app.use(express.static(path.join(process.cwd(), "./")));

app.post("/setResults", (req, res) => {
    console.log(req);
    res.redirect('./');
});

app.post("/vanyaHouse", (req, res) => {
    res.redirect('./');
    console.log(req);
});

app.get("/*", (_, res) => {
    res.sendFile(path.join(rootDir, "/constructor.html"))
});

const server = app.listen(5000);


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