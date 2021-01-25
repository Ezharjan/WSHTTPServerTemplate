import { IncomingMessage } from 'http';
import * as WebSocket from 'ws';
import OnWSConnected from '../functions/OnWSConnected'
import OnWSError from '../functions/OnWSError'

const wss = new WebSocket.Server({ port: 8383 });
wss.on('connection', OnWSConnectedRoot);
wss.on('error', OnWSError);

function OnWSConnectedRoot(eachWebsocket: WebSocket, requestOfClient: IncomingMessage) {
    OnWSConnected(eachWebsocket, requestOfClient, wss);
}
