import { connectToDatabase } from '../../../haplers/db';
import { hashPassword } from '../../../haplers/auth';

async function handler (req, res) {
    if(req.method !== 'POST') {
        return;
    }

    const { email, password } = req.body;

    const client = await connectToDatabase();
    const db = client.db();

    if( !email || !email.includes('@') || !password || password.trim().length < 7) {
        res.status(422).json({message: 'Invalid input'});
        client.close();
        return;
    }

    const existingUser = await db.collection('users').findOne({email: email});

    if(existingUser) {
        res.status(422).json({message: 'User exists already!'});
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    await db.collection('users').insertOne({
        email,
        password: hashedPassword,
    });

    res.status(201).json({message: 'Created user!'});
}

export default handler;
