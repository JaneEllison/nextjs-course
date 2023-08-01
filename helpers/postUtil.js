import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDir);

export const getPostData = (postId) => {
    const postSlug = postId.replace(/\.md$/, ''); //removes the extension
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const {data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
};

export const getAllPosts = () => {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(post => {
        return getPostData(post)
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}
