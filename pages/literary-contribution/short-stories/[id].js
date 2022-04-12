import Link from 'next/link'

// url dynamic paths identified by ids in the url params
//  the method returns paths/fallback
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseData = await response.json();

  const paths = responseData.map((story) => {
    return {
      // paths:[{}, {}, {params: {id}}]
      params: { id: story.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// make each dynamic path identified by its id a prop
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const responseData = await response.json();

  return {
    props: { story: responseData },
  };
};

const DisplayShortStory = ({ story }) => {
  return (
    <div className="card" >
      <h4>{story.title}</h4>
      <p>{story.body}</p>
      <Link href="/literary-contribution/short-stories"><a><h3>Back to list of Short Stories</h3></a></Link>
    </div>
  );
};

export default DisplayShortStory;
