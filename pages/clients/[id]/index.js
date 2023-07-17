import { useRouter } from "next/router";

function ClientsProjectsPage () {
    const router = useRouter();

    console.log(router.query);

    return(
        <div>
            <h1>Clients Projects Page</h1>
        </div>
    )
}

export default ClientsProjectsPage;
