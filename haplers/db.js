import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    const userName = '';
    const password = '';
    const client = await MongoClient.connect(`mongodb+srv://${userName}:${password}@next-js-project.anbxcud.mongodb.net/?retryWrites=true&w=majority`);

    return client;
};


