import Image from 'next/image';

import styles from './Hero.module.css';

function HeroComponent () {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/site/profile-image.jpeg'
                    alt='Image that show Nastya'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Nastya</h1>
            <p>I blog about web development.</p>
        </section>
    )
}

export default HeroComponent;