import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../../styles/Story.module.css";
import ChildrensStoryCard from "./ChildrensStoryCard";
import Comments from "./Comments";


const ChildrensStories = () => {
  // set initial state of the component
  const [childrensStories, setChildrensStories] = useState([]);

  const fetchChildrensStories = async () => {
    const response = await fetch("/api/childrens-stories");
    const responseData = await response.json();
    console.log(responseData, "data in childrens stories index page");
    setChildrensStories(responseData);
  };

  useEffect(() => {
    fetchChildrensStories();
  }, []);

  return (
    <div className='card'>
      {childrensStories.map((childrensStory) => (
        <div key={childrensStory.id}>
          <Link
            href={`/literary-contribution/childrens-stories/${childrensStory.id}`}
          >
            <a className={styles.story}>
              <ChildrensStoryCard name={childrensStory.name} />
              <Comments />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ChildrensStories;
