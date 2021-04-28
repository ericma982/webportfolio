import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
export default function About() {
    return (
        <div className="flex container justify-center w-full lg:w-auto mx-auto my-16">
            <div className="w-auto">
                <h1 className={utilStyles.headingIndex}>8)</h1>
                <p className="text-white max-w-prose">This is just a website for myself. I could be posting projects on here, sharing what music I've been listening to, or writing on my blog.
                Don't really have too much planned yet, it's all up in the air. Thanks for stopping by!
            </p>
            </div>
            <div>
                <Image src="/images/profile.jpg"
                    alt="Picture of the author"
                    width={1024}
                    height={682.5}
                    layout="intrinsic" />
            </div>
        </div>
    )
}