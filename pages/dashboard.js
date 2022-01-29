import useAuth from '../hooks/useAuth'
import Link from 'next/link'
import Error from 'next/error'
import axios from 'axios'
import dbConnect from '../util/dbConnect'
import Post from '../models/Post'

import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'

export default function Dashboard({ postCards }) {
    const { data, loading, error } = useAuth();
    const router = useRouter();

    if (data?.email != 'ericma982@gmail.com') {
        return <Error statusCode={404} />
    }
    else if (!data) {
        router.push('/login')
    }



    const deletePost = async event => {
        event.preventDefault();
        const res = await fetch(`/api/posts/${event.target.id.value}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */',
                'Content-Type': 'application/json'
            }
        });
        //const res = await axios.delete(`/api/posts/${event.target.id.value}`)

        console.log(res)
        window.location.reload(false);
    }


    return (
        <div className="container justify-center w-full lg:w-auto mx-auto my-16 h-5/6 h-max-screen overflow-auto">
            <h1 className={utilStyles.headingIndex}>Dashboard</h1>
            <br />
            <Link href="/newPost"><button className="mb-5 p-2 border-2 border-black-200 text-white
            hover:bg-white hover:shadow-lg hover:border-transparent hover:text-black">New Blog Post</button></Link>
            <div className="grid grid-cols-3 grid-rows-auto flex-wrap justify-center md:mx-16 lg:mx-16 lg:gap-y-12 lg:gap-x-48">
                {postCards.map(post => {
                    return (
                        <button key={post._id} className="overflow-hidden group bg-gray-900 bg-opacity-30
                         rounded border-2 border-black-200 
                         hover:bg-white hover:shadow-lg hover:border-transparent relative 
                         md:h-32 md:w-32 lg:h-32 lg:w-80 " > {//card content}
                            }
                            <Link href={`/blog/${post._id}`}>
                                <div className=""> {//heading}
                                }
                                    <div className="text-lg text-white group-hover:text-black">
                                        <h4 className="font-bold truncate">{post.title}</h4>
                                    </div>
                                    <div className="text-sm  text-white group-hover:text-black">
                                        <h4 className="">{post.createdAt.split('T')[0]}</h4>
                                    </div>
                                    <div className=" text-white group-hover:text-black">
                                        <p className="truncate">{post.body}</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex">
                                <Link href={`/editPost/${post._id}`}><button className="bg-blue-500 p-2 rounded text-green-200" type="submit">Edit</button></Link>
                                <form onSubmit={deletePost}>
                                    <input type="hidden" id="id" value={post._id}></input>
                                    <button className="bg-blue-500 p-2 rounded text-green-200" type="submit">Delete</button>
                                </form>
                            </div>
                        </button>

                    )
                })}
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    await dbConnect();

    const res = await Post.find().sort({ createdAt: -1 });//axios.get('http://localhost:3000/api/posts');

    const postCards = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(postCards);
    return { props: { postCards } };

}