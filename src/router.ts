import express from 'express';
import { routes } from './routes';

let router = express.Router();

// 循环获取 routes 导出来的数组然后通过 router 监听
routes.map((value) => {
    const { path, type, callback: callback } = value;
    if (type === "GET") {
        router.get(path, callback);
    }
    if (type === "POST") {
        router.post(path, callback);
    }
    if (type === "DELETE") {
        router.delete(path, callback);
    }
    if (type === "PUT") {
        router.put(path, callback);
    }
});

export default router;
