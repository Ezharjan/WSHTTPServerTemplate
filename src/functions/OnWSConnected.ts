import { IncomingMessage } from 'http';
import * as WebSocket from 'ws';

/**
 * On global WebSocket connected with a client.
 * @param aWebsocket Single websockets after connected with each clients;
 * @param WSServer Global WebSocket whic holds many clients after connection.
 */
export default async function OnWSConnected(
    aWebsocket: WebSocket,
    clientRequest: IncomingMessage,
    WSServer: WebSocket.Server) {

    console.log('Connection established');
    //test...
    startCounting(aWebsocket);
    getIncommingMsg(clientRequest);

    aWebsocket.on('open', () => {

    });

    aWebsocket.on('message', (data) => {
        //test...
        broadcastMsg(WSServer, data);

    });

    aWebsocket.on('upgrade', (req) => {

    })

    aWebsocket.on('unexpected-response', (clientReq, res) => {

    })

    aWebsocket.on('ping', (bufData) => {

    });

    aWebsocket.on('pong', (bufData) => {

    });

    aWebsocket.on('error', (err) => {
        console.log('Error: ' + err);
    });

    aWebsocket.on('close', (res, err) => {
        console.log(res + ': closed; Error: ' + err ? "Closed successfully!" : err);
    });
}

function broadcastMsg(wsServer: WebSocket.Server, data: WebSocket.Data) {
    wsServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

function startCounting(eachWebSocket: WebSocket) {
    let i = 0
    setInterval(() => {
        eachWebSocket.send(i++);
    }, 1000);
}

function getIncommingMsg(reqOfAClient: IncomingMessage) {
    const ip = reqOfAClient.socket.remoteAddress;
    console.log("The remote IP is:" + ip);
}