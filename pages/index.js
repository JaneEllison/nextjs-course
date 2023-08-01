import HeroComponent from '../components/homePage/Hero';
import FeaturedPostsComponent from '../components/homePage/FeaturedPosts';
import { getFeaturedPosts } from '../helpers/postUtil';

function HomePage (props) {
    return (
        <>
            <HeroComponent />
            <FeaturedPostsComponent posts={props.posts}/>
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        }
    }
}

export default HomePage;
