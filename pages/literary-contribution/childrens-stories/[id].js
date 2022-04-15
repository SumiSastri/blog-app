/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

import ChildrensStoryCard from "./ChildrensStoryCard";

const DisplayChildrensStory = () => {
  const [childrensStory, setChildrensStory] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetchChildrensStory = async () => {
    const response = await fetch(`/api/childrens-stories/${id}`);
    const data = await response.json();
    console.log({ data: data });
    setChildrensStory(data);
  };
  console.log(childrensStory, "single story by id");

  useEffect(() => {
    fetchChildrensStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {childrensStory && (
          <div className='card'>
      <img  className="" label ="monsters" src={`https://robohash.org/${id}?set=set2`} alt="monsters" />
            <ChildrensStoryCard
              name={childrensStory.name}
              description={childrensStory.description}
            />
              <Link href="/literary-contribution/childrens-stories"><a><h3>Back to list of Childrens Stories</h3></a></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayChildrensStory;
