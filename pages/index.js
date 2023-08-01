import HeroComponent from '../components/homePage/Hero';
import FeaturedPostsComponent from '../components/homePage/FeaturedPosts';

const DUMMY_POSTS = [
    {
        slug: '1',
        title: 'Title',
        image: 'image1.jpeg',
        excerpt: 'Mandamus elementum quot senserit adversarium appetere autem inimicus graeci senserit. Ignota dolore praesent interdum wisi expetenda faucibus evertitur risus mea. Oratio has suscipit primis conceptam invidunt penatibus voluptaria sociis. Dolorum oporteat intellegebat dictas quisque an. Hendrerit reprimique finibus primis ante utinam.',
        date: '2023-07-21',
    },
    {
        slug: '2',
        title: 'Title',
        image: 'image2.jpeg',
        excerpt: 'Mandamus elementum quot senserit adversarium appetere autem inimicus graeci senserit. Ignota dolore praesent interdum wisi expetenda faucibus evertitur risus mea. Oratio has suscipit primis conceptam invidunt penatibus voluptaria sociis. Dolorum oporteat intellegebat dictas quisque an. Hendrerit reprimique finibus primis ante utinam.',
        date: '2023-07-22',
    },
    {
        slug: '3',
        title: 'Title',
        image: 'image3.jpeg',
        excerpt: 'Mandamus elementum quot senserit adversarium appetere autem inimicus graeci senserit. Ignota dolore praesent interdum wisi expetenda faucibus evertitur risus mea. Oratio has suscipit primis conceptam invidunt penatibus voluptaria sociis. Dolorum oporteat intellegebat dictas quisque an. Hendrerit reprimique finibus primis ante utinam.',
        date: '2023-07-24',
    }
];

function HomePage () {
    return (
        <>
            <HeroComponent />
            <FeaturedPostsComponent posts={DUMMY_POSTS}/>
        </>
    )
}

export default HomePage;
