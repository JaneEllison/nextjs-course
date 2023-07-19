function UserIdPage(props) {
    return (
        <h1>{props.id}</h1>
    )
}

export default UserIdPage;

//no pregeneration = no need to define path in advance
export async function getServerSideProps(context){
    const { params } = context;

    const userId = params.uId;

    return {
        props: {
            id: `userId-${userId}`,
        }
    }
}
