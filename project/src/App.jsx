import { useState } from 'react';
import './index.css'

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const newData = data.slice(0, 3)
        setUsers((prev) => [...prev, ...newData]);
      });
  };

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const newData = data.slice(0, 3)
        setPosts((prev) => [...prev, ...newData]);
      });
  };

  const handleDeleteUser = (index) =>{
    const newUsers = users.filter((item,i) => i !== index);
    setUsers(newUsers);
  }

  const handleDeletePost = (index) =>{
    const newPosts = posts.filter((item,i) => i !== index);
    setPosts(newPosts);
  }

  return (
    <div className='parent'>
      <div className='users-div'><button onClick={fetchUsers}>Get Users</button>
        {users.map((item, index) => (
          <div key={index} className='delete-div'>
            <p>{item.name}</p>
            <button onClick={() => handleDeleteUser(index)}>delete</button>
          </div>
        ))}
      </div>

      <div className='posts-div'><button onClick={fetchPosts}>Get Posts</button>
        {posts.map((item, index) => (
          <div key={index} className='delete-div'>
          <p>{item.title}</p>
          <button onClick={() => handleDeletePost(index)}>delete</button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
