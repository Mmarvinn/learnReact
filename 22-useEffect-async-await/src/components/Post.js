import './Post.css';

function Post(props) {
  const { body, id, title, userId } = props;

  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User ID:{userId}</h3>
    </div>
  );
}

export default Post;
