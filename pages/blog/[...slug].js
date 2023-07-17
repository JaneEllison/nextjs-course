import { useRouter } from "next/router";

function BlogPosts () {
    const router = useRouter();

    console.log(router);

    return (
        <div>
            <h1> Blog Posts</h1>
        </div>
    )
}

export default BlogPosts;
