import Head from "next/head";
import axios from 'axios'
import utilStyles from '../styles/utils.module.css'

export default function id({ post }) {

    return (
        <div className="container justify-center w-full lg:w-auto mx-auto">
            <h1 className={utilStyles.headingLg}>{post[0].title}</h1>
            <div>{post[0].body}</div>
        </div>

    )
}

id.getInitialProps = async (context) => {
    const res = await axios.get('http://localhost:3000/api/posts', {
        params: {
            ID: context.pathname
        }
    });

    const post = res.data.data;

    console.log(post);
    return { post };

}