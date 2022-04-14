import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return ( 
        <nav>
            {/* <img  alt="" src="../premasastrilogo.jpeg"/> */}
            <Image height={70} width={70} alt="" src="/premasastrilogo.jpeg"/>
            <h1>Prema Sastri (1932-2017)</h1>
              <h3>Pioneer of Indian writing in English</h3>  
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href ="/literary-contribution"><a>Literary Contribution</a></Link>
            <Link href="/contact"><a>Contact</a></Link> 
        </nav>
     );
}
 
export default Header;