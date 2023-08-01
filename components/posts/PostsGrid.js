import PostItem from './PostItem';
import styles from './PostGrid.module.css';

function PostsGrid (props) {
    const { posts } = props;

    return (
        <ul className={styles.grid}>
            {posts.map(post => (
                <PostItem
                    key={post.slug}
                    image={post.image}
                    title={post.title}
                    date={post.date}
                    text={post.excerpt}
                    postId={post.slug}
                />
            ))}
        </ul>
    )
}

export default PostsGrid;
