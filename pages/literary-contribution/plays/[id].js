import Link from 'next/link'

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseData = await response.json();

  const paths = responseData.map((play) => {
    return {
      params: { id: play.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const responseData = await response.json();

  return {
    props: { play: responseData },
  };
};

const DisplayPlay = ({ play }) => {
  return (
    <div className="card" >
      <h4>{play.title}</h4>
      <p>{play.body}</p>
      <Link href="/literary-contribution/plays"><a><h3>Back to list of Plays</h3></a></Link>
    </div>
  );
};

export default DisplayPlay;
