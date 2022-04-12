import Header from "./Header"
import Footer from "./Footer"

const Navs = ({children}) => {
    return ( <div className="nav">
        <Header/>
        {children}
        <Footer/>
    </div> );
}
 
export default Navs;