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
      <h3>List of Prema Sastri's Short Stories</h3>

      {shortStories.map(story => (
        <div className="card" key={story.id}>
          <h4>{story.title}</h4>
          <p>{story.body}</p>
        </div>
      ))}
    </div>
  );
};
export default ShortStories;
