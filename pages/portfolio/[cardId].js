import { useRouter } from "next/router";

function Card () {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card;
