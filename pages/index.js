import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import NavBar from "../common/Header";
import Footer from "../common/Footer";

export default function Home() {
  return (
    <main>
      <div className={styles.card1}>
        <h3>Author's statement</h3>
        <div className={styles.grid}>
          <Image
            height={200}
            width={175}
            alt='The author Prema Sastri in 2007'
            src='/premasastriauthor2007.jpeg'
          />
          <p>
            <em>Prema Sastri – Preface, A Fine Gift From Lakshmi, 2007</em>
          </p>
          <p>
            We are heroic, cowardly, hurt, passionate, kind or cruel at
            different moments. We know very little about ourselves, and still
            less about others.
          </p>
          <p>
            We shout at the clerk behind the counter, not knowing he has
            recently lost a child. We imagine we can do the impossible and end
            up living with unfulfilled dreams.
          </p>
          <p>
            I describe people caught in difficult situations and the manner in
            which they have reacted. My stories are about insights and
            perceptions rather than high drama. They are about people we have
            met without knowing the rich complexity of their lives.”
          </p>
        </div>
      </div>
      <div>
        <br />
        <hr />
        <p>
          Prema’s stories have inspired and enraged people in equal measure. Her
          stories are written with the view to free the mind from routine and
          monotony and act as a catalyst for debate and discussion on rigidly
          held views and opinions.
        </p>
        <p>
          After years of pursuing different directions, she found her way as a
          writer.The journey from scribbles as a child, was a dream fulfilled at
          Chatham College, Pittsburgh where she studied creative writing.She was
          encouraged when her story, <em>A Paper Package</em>, won the best
          writing award from <em>The Minor Bird</em>, the Chatham College
          magazine.Wider recognition soon followed when her story.
          <em>The Last Time</em>, won a prize from <em>The Writer’s Club</em>,,
          Pittsburgh.
        </p>
        <p>
          On her return to India, in the 1950s she wrote prose and short
          stories, contributing over 200 feature articles to newspapers and
          magazines.
        </p>
        <p>
          As the drama critic, for <em>The Indian Express</em>, she started
          experimenting with short plays.<em>Across The Border</em>, a one-act
          play was performed at the <em>Asian Theatre Festival</em> in London,
          where it won the best actor and best play.<em>Shivaji</em>, a
          three-act play won the National Award for best play at the Shivaji
          Chatrapathi celebrations.The award was presented by the then President
          of India, BD Jatti.Her play <em>Gandhi</em>, published by{" "}
          <em>Writers' Workshop</em>, Calcutta, was performed off-broadway, with
          Madhur Jaffrey, as Kasturba.
        </p>
        <p>
          She has written over 30 short plays, all which have been performed in
          theatres in Bangalore, India. She is listed in the Sahitya Kala
          Academy’s <em>Whose Who of Indian Writers.</em>{" "}
        </p>
        <p>
          When asked why she wrote, Prema said: “I write because I am haunted by
          characters and situations that demand I present them to the world.
          They often try to take over my life."
        </p>
        <hr />
        <Link href='/literary-contribution'>
          <a>
            <h3>Prema's Literary Contribution</h3>
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <h3>Prema's Story</h3>
          </a>
        </Link>
      </div>
      </main>
  );
}
