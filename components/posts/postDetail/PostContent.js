import ReactMarkdown from 'react-markdown';

import styles from './PostContent.module.css';
import PostHeader from './PostHeader';

function PostContent (props) {
    const {
        slug,
        title,
        image,
        content,
    } = props.post;

    const imagePath = `/images/posts/${slug}/${image}`;

    return (
        <article className={styles.content}>
            <PostHeader
                title={title}
                image={imagePath}
            />
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;
