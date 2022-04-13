import Link from 'next/link'

import styles from "../../../styles/Story.module.css"

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseData = await response.json();

  return {
    props: { shortStories: responseData },
  };
};

const ShortStories = ({ shortStories }) => {
  return (
    <div className='card'>
      <h2>List of Prema Sastri's Short Stories</h2>

      {shortStories.map(story => (
        <Link href={`/literary-contribution/short-stories/${story.id}`} key={story.id}>
          <a className={styles.story}><h4>{story.title}</h4></a>
      
        </Link>
      ))}
    </div>
  );
};
export default ShortStories;
