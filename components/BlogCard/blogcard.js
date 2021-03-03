import Image from 'next/image'
import Link from 'next/link'


const photo = "/public/images/profile.jpg"

export default function BlogCard() {
    return (
        <>
            <Link href="/">
                <div>
                    <Image
                        src="/images/profile.jpg"
                        alt="default"
                        width={250}
                        height={250}
                    />
                    <h1>Title</h1>
                    <p>sample text</p>

                </div>
            </Link>

        </>
    )
}