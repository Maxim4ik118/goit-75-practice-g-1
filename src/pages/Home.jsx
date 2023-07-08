import Loader from 'components/Loader/Loader';
import { STATUSES } from 'constants/statuses';
import { requestPosts } from 'helpers/bookAPI';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(false);
  const firstRequest = useRef(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setStatus(STATUSES.pending);
        const response = await requestPosts();

        setPosts(response);
        setStatus(STATUSES.successful);
        firstRequest.current = false;
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };

    fetchPosts();
  }, []);

  //   if (status === STATUSES.pending || status === STATUSES.idle) {
  //     return <Loader />;
  //   }
  //   if (status === STATUSES.error) {
  //     return <p>Error message: {error}</p>;
  //   }
  if (!firstRequest.current) {
    // some logic
  }
  return (
    <div>
      <h1>Home</h1>
      {status === STATUSES.pending ? <Loader /> : null}
      {status === STATUSES.error ? <p>Error message: {error}</p> : null}

      <ul>
        {Array.isArray(posts) &&
          posts.map(({ id, body, title }) => (
            <li key={id}>
              <Link to={`/posts/${id}`}>
                <h2>{title}</h2>
                <p>{body}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
