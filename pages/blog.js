import Link from 'next/link'
import axios from 'axios'
import utilStyles from '../styles/utils.module.css'
export default function Blog({ postCards }) {


    return (
        <div className="container justify-center w-full lg:w-auto mx-auto">
            <h1 className={utilStyles.headingLg}>Blog</h1>
            <div className="grid grid-cols-3 grid-gap-4 flex-wrap">
                {postCards.map(post => {
                    return (
                        <div key={post._id}>
                            <Link href={`${post._id}`}>
                                <div className="container">
                                    <div className={utilStyles.headingMd}>
                                        <h4>{post.title}</h4>
                                    </div>
                                    <div className={utilStyles.lightText}>
                                        {post.body}
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

Blog.getInitialProps = async (context) => {
    const res = await axios.get('http://localhost:3000/api/posts');

    const postCards = res.data.data;

    console.log(postCards);
    return { postCards };

}