import Loader from 'components/Loader/Loader';
import { STATUSES } from 'constants/statuses';
import { requestPostById } from 'helpers/bookAPI';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Search() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const value = params.get('query');

  useEffect(() => {
    if (!value) {
      return;
    }
    const fetchPosts = async () => {
      try {
        setStatus(STATUSES.pending);
        const response = await requestPostById(value);

        setPosts([response]);
        setStatus(STATUSES.successful);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };

    fetchPosts();
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    setParams({ query: e.target.elements.query.value });
  };

  return (
    <div>
      <h1>Search Post</h1>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search post" />
        <button type="submit">Search</button>
      </form>

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

export default Search;
