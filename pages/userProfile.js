function UserProfilePage (props) {
    const {
        userName,
    } = props;

    return (
        <h1>{userName}</h1>
    )
}

export default UserProfilePage;

//no need to revalidate, because it is already rerender on each new request
//it runs only ON SERVER
export async function getServerSideProps (context) {
    //we can manipulate with request and response (adding cookie or header, for example)
    const { params, req, res } = context;

    return {
        props: {
            userName: 'Max',
        }
    };
}
