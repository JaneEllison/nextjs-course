import styles from './PostContent.module.css';
import PostHeader from './PostHeader';

const DUMMY_POST = {
    slug: '1',
    title: 'Title',
    image: 'image1.jpeg',
    date: '2023-07-21',
    content: '# This is a first post',
};

function PostContent () {
    const {
        slug,
        title,
        image,
        date,
        content,
    } = DUMMY_POST;

    const imagePath = `/images/posts/${slug}/${image}`;

    return (
        <article className={styles.content}>
            <PostHeader
                title={title}
                image={imagePath}
            />
            {content}
        </article>
    )
}

export default PostContent;
