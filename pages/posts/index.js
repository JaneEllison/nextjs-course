import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/postUtil';

function AllPostsPage(props) {
    return(
        <AllPosts posts={props.posts} />
    )
}

export function getStaticProps(){
    const posts = getAllPosts();

    return {
        props: {
            posts,
        }
    }
}

export default AllPostsPage;
