import WebSocket from "ws";

//const server = app.listen(port);


let questions = new Map();

const wss = new WebSocket.Server({
    noServer: true
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        if(message)
    });
    const mas = {type: 'field', payload: place};
    ws.send(JSON.stringify(mas));
});