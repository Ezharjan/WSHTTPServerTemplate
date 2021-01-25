import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User } from '@/entity/User';

export default async function SaveUser(request: Request, response: Response) {
    const connection = await createConnection();
    const repository = connection.getRepository(User);
    const user = new User();

    user.name = request.query.name as string;
    user.email = request.query.email as string;

    await repository.save(user);
    connection.close();
    response.send('Data is saved in database successfully!');
}
