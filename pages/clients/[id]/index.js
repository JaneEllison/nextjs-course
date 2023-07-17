import { useRouter } from "next/router";

function ClientsProjectsPage () {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientProject]',
            query: {
                id: 'max',
                clientProject: 'projectA',
            },
        })
    }

    return(
        <div>
            <h1>Clients Projects Page</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}

export default ClientsProjectsPage;
