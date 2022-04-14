import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChildrensStoryCard() {
  const router = useRouter();
  const { id } = router.query;

  const [childrensStory, setChildrensStory] = useState(null);

  const fetchChildrensStory = async () => {
    const response = await fetch(`/api/childrens-stories/${id}`);
    const data = await response.json();
    console.log({ data: data });
    setChildrensStory(data);
  };

  console.log(childrensStory);

  useEffect(() => {
    fetchChildrensStory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {childrensStory && (
          <div className="card">
            <div className="card">
              <h3>{childrensStory.name}</h3>
              <p>{childrensStory.description} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
