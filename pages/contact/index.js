import Link from 'next/link'
import Image from 'next/image'
import {getServerSideProps} from "next"
import Stripe from 'stripe'

const ContactPage = () => {
    const handleClick = async(priceId) => {}
    return ( <div>
        <p>If you are a reader, here are some frequently asked questions</p>
        <p>Second rights and republishing Prema’s work? Have a look at the copyright and intellectual property section</p>
<div className="card">
<h5>Buy direct from premasastri.com:</h5>
<Image height={100} width={75} alt="" src="/finegiftfromlakshmipremasastri.jpeg"/>
<h6> Cost US Dollars:{((1000)/100).toFixed(2)}</h6>
<button onClick={() => handleClick("abcd")}>Buy</button>
</div>
    </div> );
}
getServerSideProps = async () => {
    const stripe = new Stripe(process.env.NEXT_STRIPE_API_PUBLIC_KEY)
}
export default ContactPage;

