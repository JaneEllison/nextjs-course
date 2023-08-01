import Image from 'next/image';
import Link from 'next/link';

import styles from './PostItem.module.css';

function PostItem (props) {
    const {
        postId,
        image,
        title,
        date,
        text,
    } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${postId}/${image}`;
    const linkPath = `/posts/${postId}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <div className={styles.image}>
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{text}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem;
