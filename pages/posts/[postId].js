import PostContent from '../../components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from "../../helpers/postUtil";
import localFont from "next/dist/compiled/@next/font/dist/local";

function SinglePostPage(props) {
    return (
        <PostContent post={props.post}/>
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { postId } = params;

    const post = getPostData(postId)

    return {
        props: {
            post,
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postsFileNames = getPostsFiles();
    const pathsName = postsFileNames.map(fileName => (
        fileName.replace(/\.md$/, '')
    ));

    return {
        paths: pathsName.map(path => ({ params: { postId: path } })),
        fallback: false,
    }
}

export default SinglePostPage;
