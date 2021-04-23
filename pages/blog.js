import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import dbConnect from '../util/dbConnect'
import Post from '../models/Post'
export default function Blog({ postCards }) {


    return (
        <div className="container justify-center w-full lg:w-auto mx-auto my-16">
            <h1 className={utilStyles.headingIndex}>Blog</h1>
            <div className="grid grid-cols-3 grid-rows-auto flex-wrap justify-center w-full md:mx-16 lg:mx-16 lg:gap-y-12 lg:gap-x-48">
                {postCards.map(post => {
                    return (
                        <div key={post._id} className="overflow-hidden shadow-md relative md:h-32 md:w-32 lg:h-32 lg:w-64 hover:bg-red-200" > {//card content}
                        }
                            <Link href={`${post._id}`}>
                                <div className=""> {//heading}
                                }
                                    <div className={utilStyles.headingMd}>
                                        <h4>{post.title}</h4>
                                    </div>
                                    <div className={utilStyles.lightText}>
                                        <p className="">{post.body}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    await dbConnect();

    const res = await Post.find({ private: false });//axios.get('http://localhost:3000/api/posts');

    const postCards = JSON.parse(JSON.stringify(res));//.data.data;

    //console.log(postCards);
    return { props: { postCards } };

}