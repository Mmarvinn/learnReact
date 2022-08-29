import { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(API_URL);
        const arrOfPosts = await response.json();
        setPosts(arrOfPosts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })(); // <<< IIFE - Immediatle Invoked Function Expression
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((arrOfPosts) => setPosts(arrOfPosts))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
