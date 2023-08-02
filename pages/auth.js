import { useSession } from 'next-auth/react';

import AuthForm from '../components/auth/auth-form';

function AuthPage() {
  const { data: session, status } = useSession();

  if(status === 'loading') {
      return <p>Loading...</p>
  }

  if(session) {
      window.location.href = '/profile';
  }

  return (
        <>
            {!session && <AuthForm />}
        </>
      )
}

export default AuthPage;
