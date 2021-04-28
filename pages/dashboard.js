import useAuth from '../hooks/useAuth'
import Link from 'next/link'
import Error from 'next/error'
import axios from 'axios'
import dbConnect from '../util/dbConnect'
import Post from '../models/Post'

import utilStyles from '../styles/utils.module.css'

export default function Dashboard({ postCards }) {
    const { data, loading, error } = useAuth();

    if (data?.email != 'ericma982@gmail.com') {
        return <Error statusCode={404} />
    }



    const deletePost = async event => {
        event.preventDefault();
        const res = await fetch(`/api/posts/${event.target.id.value}`, {
            method: 'DELETE'
        });
        //const res = await axios.delete(`/api/posts/${event.target.id.value}`)

        console.log(res)
        //window.location.reload(false);
    }


    return (
        <div className="container justify-center w-full lg:w-auto mx-auto my-16">
            <h1 className={utilStyles.headingIndex}>Dashboard</h1>
            <br />
            <Link href="/newPost"><button className="p-2 bg-green-500 hover:bg-green-700">New Blog Post</button></Link>
            <div className="grid grid-cols-3 grid-rows-auto flex-wrap justify-center w-full md:mx-16 lg:mx-16 lg:gap-y-12 lg:gap-x-48">
                {postCards.map(post => {
                    return (
                        <div key={post._id} className="overflow-hidden shadow-md relative md:h-32 md:w-32 lg:h-32 lg:w-64" > {//card content}
                        }
                            <Link href={`${post._id}`}>
                                <div className=""> {//heading}
                                }
                                    <div className={utilStyles.headingMd}>
                                        <h4 className="font-bold">{post.title}</h4>
                                    </div>
                                    <div className={utilStyles.lightText}>
                                        <p className="truncate">{post.body}</p>
                                    </div>
                                </div>
                            </Link>
                            <form onSubmit={deletePost}>
                                <input type="hidden" id="id" value={post._id}></input>
                                <button className="bg-blue-500 p-2 rounded text-green-200" type="submit">Delete</button>
                            </form>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    await dbConnect();

    const res = await Post.find();//axios.get('http://localhost:3000/api/posts');

    const postCards = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(postCards);
    return { props: { postCards } };

}