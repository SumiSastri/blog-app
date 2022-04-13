import Link from 'next/link'

import styles from "../../../styles/Story.module.css"

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseData = await response.json();

  return {
    props: { plays: responseData },
  };
};

const Plays = ({ plays }) => {
  return (
    <div className='card'>
      <h2>List of Prema Sastri's Plays</h2>

      {plays.map(play => (
        <Link href={`/literary-contribution/plays/${play.id}`} key={play.id}>
          <a className={styles.story}><h4>{play.title}</h4></a>
        </Link>
      ))}
    </div>
  );
};
export default Plays;