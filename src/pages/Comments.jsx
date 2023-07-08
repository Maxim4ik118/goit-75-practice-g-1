import Loader from 'components/Loader/Loader';
import { STATUSES } from 'constants/statuses';
import { requestPostComments } from 'helpers/bookAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setStatus(STATUSES.pending);
        const response = await requestPostComments(postId);

        setComments(response);
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
      <h1>Comments</h1>
      {status === STATUSES.pending ? <Loader /> : null}
      {status === STATUSES.error ? <p>Error message: {error}</p> : null}

      <ul>
        {Array.isArray(comments) &&
          comments.map(({ id, email, name, body }) => (
            <li key={id}>
              <h2>{name}</h2>
              <h3>{email}</h3>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Comments;
