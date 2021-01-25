import express from 'express';
import SaveUser from './functions/user';

interface callbackInterface {
    (request: express.Request, response: express.Response): void;
}

type Routes = {
    path: string;
    type: "GET" | "POST" | "DELETE" | "PUT";
    callback: callbackInterface;
}[];

export const routes: Routes = [
    { path: "/home", type: "GET", callback: (requst, response) => { response.send("Welcome to home page.") } },
    { path: "/test_user", type: "GET", callback: SaveUser },
];
