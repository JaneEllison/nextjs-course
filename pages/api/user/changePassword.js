import { getServerSession } from 'next-auth/next'

import { connectToDatabase } from '../../../haplers/db';
import { hashPassword, verifyPassword } from '../../../haplers/auth';
import { authOptions } from '../auth/[...nextauth]';

async function handler (req, res) {
    if(req.method !== 'PATCH') {
        return;
    }

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    const userEmail = session.user.email;
    const {
        oldPassword,
        newPassword,
    } = req.body;

    const client = await connectToDatabase();
    const usersCollections = await client.db().collection('users');

    const user = await usersCollections.findOne({email: userEmail});

    if(!user) {
        res.status(404).json({ message: "User not found" });
        client.close();

        return;
    }

    const currentPassword = user.password;
    const arePasswordsEqual = await verifyPassword(oldPassword, currentPassword);

    if(!arePasswordsEqual) {
        res.status(403).json({ message: "Invalid password" });
        client.close();

        return;
    }

    const hashedNewPassword = await hashPassword(newPassword);

    await usersCollections.updateOne(
        { email: userEmail },
        { $set: { password: hashedNewPassword }}
    );

    client.close();

    return res.status(200).json({
        message: 'Password updated',
    })
}

export default handler;
