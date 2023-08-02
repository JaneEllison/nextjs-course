// import { useSession } from 'next-auth/react';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  // const { data: session, status } = useSession();
  //
  // if(status === 'loading') {
  //     return <p className={classes.profile}>Loading...</p>
  // }
  //
  // if(!session) {
  //     window.location.href = '/auth';
  // }

    const changePasswordHandler = async (passwordData) => {
        const response = await fetch ('/api/user/changePassword', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
    }

  return (
      <>
          {/*{session && (*/}
              <section className={classes.profile}>
                  <h1>Your User Profile</h1>
                  <ProfileForm onChangePassword={changePasswordHandler} />
              </section>
          {/* )} */}
      </>
  );
}

export default UserProfile;
