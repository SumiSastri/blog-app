import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return ( 
        <nav>
            {/* <img  alt="" src="../premasastrilogo.jpeg"/> */}
            <Image style={{padding:"5px", margin: "10px"}}height={225} width={225} alt="" src="/premasastrilogo.jpeg"/>
            <h1>Prema Sastri (1932-2017)</h1>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href ="/literary-contribution"><a>Literary Contribution</a></Link> 
        </nav>
     );
}
 
export default Header;