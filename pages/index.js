import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import NavBar from "../common/Header"
import Footer from "../common/Footer"

export default function Home() {
  return (
    <div className="card">

      <h2>Prema Sastri (1932-2017)</h2>
      <h3>Author's statement</h3>

<p>“I write because I am haunted by characters and situations that demand I present them to the world. They often try to take over my life.” 

<em>Prema Sastri, 2017.</em>

</p>

<p>Prema’s stories have inspired and enraged people in equal measure. Her stories are written with the view to free the mind from routine and monotony and act as a catalyst for debate and discussion on rigidly held views and opinions. 

</p>
<p>After years of pursuing different directions,  she did found her way, as a writer. The journey from scribbles as a child, was a dream fulfilled at Chatham College, Pittsburgh where she studied creative writing. She was encouraged when her story, A Paper Package, won the best writing award from The Minor Bird, the Chatham College magazine.Wider recognition, soon followed when her story, The Last Time won a prize from The Writer’s Club, Pittsburgh.

</p> <p>On her return to India, in the 1950s she wrote prose and short stories, contributing over 200 feature articles to newspapers and magazines.As the drama critic, for The Indian Express, she started experimenting with short plays.  Across The Border, a one-act Play was performed at the Asian Theatre Festival in London, where it won the best actor and best play. Shivaji, a 3-Act play won a national award. Her play Gandhi, was performed off-broadway, with Madhur Jaffrey, as Kasturba. She has written over 30 short plays, all which have been performed in theatres in Bangalore, India.

She is listed in the Sahitya Kala Academy’s Whose Who of Indian Writers. </p><p>Prema wrote because she felt she has something to say that readers would like to hear.</p>
     
<Link href="/literary-contribution"><a><h3>Prema's Literary Contribution</h3></a></Link>
<Link href="/about"><a><h3>Prema's Story</h3></a></Link>      

    </div>
  )
}
