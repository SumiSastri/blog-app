import Link from 'next/link'

const Header = () => {
    return ( 
        <nav>
            <div>
                <h1>Prema Sastri: A pioneering Indian author writing in English</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href ="/literary-contribution"><a>Literary Contribution</a></Link> 
        </nav>
     );
}
 
export default Header;