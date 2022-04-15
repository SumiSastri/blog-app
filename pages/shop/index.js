import Image from 'next/image'
import {getServerSideProps} from "next"

const Shop = () => {
    const handleClick = async(priceId) => {}
    return ( <div>
<h5>Buy direct from premasastri.com:</h5>
<Image height={100} width={75} alt="" src="/finegiftfromlakshmipremasastri.jpeg"/>
<h6> Cost US Dollars:{((1000)/100).toFixed(2)}</h6>
<button onClick={() => handleClick("abcd")}>Buy</button>
</div>)
}
getServerSideProps = async () => {
    const stripe = new Stripe(process.env.NEXT_STRIPE_API_PUBLIC_KEY)
}
export default ContactPage;

