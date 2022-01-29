import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import dbConnect from '../../util/dbConnect'
import Post from '../../models/Post'
export default function Blog({ postCards }) {


    return (
        <div className="container justify-center w-full lg:w-auto mx-auto my-16 h-5/6 h-max-screen overflow-y-auto">
            <h1 className={utilStyles.headingIndex}>Blog</h1>
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
                                        <p className="overflow-ellipsis overflow-hidden">{post.body}</p>
                                    </div>
                                </div>
                            </Link>
                        </button>

                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    await dbConnect();

    const res = await Post.find({ private: false }).sort({ createdAt: -1 });//axios.get('http://localhost:3000/api/posts');

    const postCards = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(postCards);
    return { props: { postCards } };

}