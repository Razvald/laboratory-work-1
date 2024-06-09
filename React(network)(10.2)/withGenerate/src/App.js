import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const FetchData = ({ id }) => {
  const fetchPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
  };

  const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  };

  const { data: post, isError: postError, isLoading: postLoading } = useQuery(['post', id], () => fetchPost(id));
  const userId = post?.userId;
  const { data: user, isError: userError, isLoading: userLoading } = useQuery(['user', userId], () => fetchUser(userId), {
    enabled: !!userId,
  });

  if (postLoading || userLoading) return <div>Loading...</div>;
  if (postError) return <div>Error fetching post data</div>;
  if (userError) return <div>Error fetching user data</div>;

  return (
    <div>
      <h2>Post Details</h2>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

const Home = () => {
  const [id, setId] = useState('');
  return (
    <div>
      <h1>Fetch Post Data</h1>
      <form>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <Link to={`/post/${id}`}>
          <button type="button">Fetch</button>
        </Link>
      </form>
    </div>
  );
};

const FetchDataWrapper = () => {
  const { id } = useParams();
  return <FetchData id={id} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<FetchDataWrapper />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
