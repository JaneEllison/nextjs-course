import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectToDatabase } from '../../../haplers/db';
import { verifyPassword } from '../../../haplers/auth';

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');
                const user = await usersCollection.findOne({
                    email: credentials.email
                })

                if(!user) {
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if(!isValid) {
                    client.close();
                    throw new Error('Could not log in!');
                }

                client.close();

                return {
                    email: user.email
                }
            }
        })
    ],
};

export default NextAuth(authOptions);
