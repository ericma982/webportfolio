import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex items-center flex-wrap py-3 px-8 shadow-md">
            <Link href="/">
                <span>Home</span>
            </Link>
            <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
                <div className="lg:flex-row lg:inline-flex lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <Link href="/about"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center">About Me</a></Link>
                    <Link href="/blog"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center">Blog</a></Link>
                </div>

            </div>


        </nav>
    );
};