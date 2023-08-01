import styles from './FeaturedPosts.module.css';
import PostsGrid from '../posts/PostsGrid';

function FeaturedPostsComponent (props) {
    return (
        <section className={styles.latest}>
            <h2>Featured posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default FeaturedPostsComponent;
