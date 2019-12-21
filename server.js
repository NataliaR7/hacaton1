import WebSocket from "ws";

//const server = app.listen(port);


let questions = [];

const wss = new WebSocket.Server({
    noServer: true
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
    });
    ws.on('getResults', function getResults(idQ) {
        ws.send(questions.)
    })
    // ws.on('put', function put(message) {
    //
    //
    // });
    const mas = {type: 'field', payload: place};
    ws.send(JSON.stringify(mas));
});