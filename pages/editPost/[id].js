import { useState } from 'react'
import { Router, useRouter } from 'next/router'
import dbConnect from '../../util/dbConnect'
import Post from '../../models/Post'


export default function id({ post }) {

    const router = useRouter();

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [privatePost, setPrivatePost] = useState(post.private);


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }

    const handlePrivateChange = (e) => {
        setPrivatePost(e.target.value);
    }

    const postUpdate = async (event) => {
        event.preventDefault()


        const postData = JSON.stringify({
            title: title,
            body: body,
            private: privatePost,

        })

        const res = await fetch(`/api/posts/${post._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: postData,

        })

        if (res.ok) {
            router.push('/dashboard')
        }

    }


    return (
        <div className="container flex flex-col mx-auto my-10">
            <h1 className="text-6xl font-bold text-white">New Post</h1>
            <form className="mx-auto my-10" onSubmit={postUpdate} >
                <label htmlFor="title"><h2 className="text-4xl text-white">Title</h2></label>
                <br />
                <input type="text" id="title" className="border-2 border-black border-opacity-10 w-full" required onChange={handleTitleChange} default={title}></input>
                <br />
                <label htmlFor="body"><h2 className="text-4xl text-white">Body</h2></label>
                <br />
                <textarea rows="4" cols="175" type="text" id="body" className="border-2 border-black border-opacity-10" required onChange={handleBodyChange} default={body}></textarea>
                <br />
                <label htmlFor="private"><h2 className="text-4xl text-white" onChange={handlePrivateChange} default={privatePost}>Is this a private post?</h2></label>
                <select id="private" className="border-2 border-black border-opacity-10 p-2" >
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <br />
                <br />
                <button className="p-2 bg-blue-200" type="submit" >Submit</button>
            </form>
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
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    dbConnect();
    const res = await Post.find().sort({ createdAt: -1 });//axios.get(`http://localhost:3000/api/posts`)
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