import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Error from 'next/error'

export default function Newpost() {
    const { data, loading, error } = useAuth();

    if (!data?.email == 'ericma982@gmail.com') {
        return <Error statusCode={404} />
    }

    const router = useRouter();


    const singlePost = async event => {
        event.preventDefault()


        const res = await axios.post('/api/posts/', {
            title: event.target.title.value,
            body: event.target.body.value,
            private: event.target.private.value
        })
        const data = res.data.data;
        router.push('dashboard')
    }


    return (
        <div className="container flex flex-col mx-auto my-10">
            <h1 className="text-6xl font-bold">New Post</h1>
            <form className="mx-auto my-10" onSubmit={singlePost} >
                <label htmlFor="title"><h2 className="text-4xl">Title</h2></label>
                <br />
                <input type="text" id="title" className="border-2 border-black border-opacity-10 w-full" required></input>
                <br />
                <label htmlFor="body"><h2 className="text-4xl">Body</h2></label>
                <br />
                <textarea rows="4" cols="175" type="text" id="body" className="border-2 border-black border-opacity-10 " required></textarea>
                <br />
                <label htmlFor="private"><h2 className="text-4xl">Is this a private post?</h2></label>
                <select id="private" className="border-2 border-black border-opacity-10 p-2" >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <br />
                <br />
                <button className="p-2 bg-blue-200" type="submit" >Submit</button>
            </form>
        </div>
    )
}