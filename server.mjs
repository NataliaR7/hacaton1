import * as path from "path";
import express from "express";
import WebSocket from "ws";
import bodyParser from 'body-parser'

const app = express();
const rootDir = process.cwd();

let questions = new Map();

app.use(express.static(path.join(process.cwd(), "./")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/setResults", (req, res) => {
    console.log(req);
    res.redirect('./');
});

app.post("/vanyaHouse", (req, res) => {
    console.log(req.body);
    res.redirect('./');
});

app.get("/", (_, res) => {
    res.sendFile(path.join(rootDir, "/constructor.html"))
});

const server = app.listen(5000);




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