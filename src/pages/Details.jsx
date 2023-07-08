import Loader from 'components/Loader/Loader';
import { STATUSES } from 'constants/statuses';
import { requestPostById } from 'helpers/bookAPI';
import { useState, useEffect, lazy } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const Comments = lazy(() => import('./Comments'));

function Details() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setStatus(STATUSES.pending);
        const response = await requestPostById(postId);

        setPost(response);
        setStatus(STATUSES.successful);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };

    fetchPosts();
  }, [postId]);

  return (
    <div>
      <h1>Details</h1>
      {status === STATUSES.pending ? <Loader /> : null}
      {status === STATUSES.error ? <p>Error message: {error}</p> : null}

      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
      <div>
        <Link to="comments">Comments</Link>
      </div>
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default Details;
