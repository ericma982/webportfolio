import Head from "next/head";
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'
import dbConnect from '../util/dbConnect'
import Post from '../models/Post'

export default function id({ post }) {

    return (
        <div className="container justify-center w-full lg:w-auto mx-auto">
            <h1 className={utilStyles.headingIndex}>{post.title}</h1>
            <div className="container justify-center w-full mx-auto whitespace-pre-wrap">{post.body}</div>
        </div>

    )
}

export async function getServerSideProps(context) {
    dbConnect();
    const res = await Post.findById(context.params.id);//axios.get(`http://localhost:3000/api/posts/${context.params.id}`);

    const post = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(post);
    return { props: { post } };

}
/*
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    dbConnect();
    const res = await Post.find();//axios.get(`http://localhost:3000/api/posts`)
    const posts = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(posts);

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post._id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
*/