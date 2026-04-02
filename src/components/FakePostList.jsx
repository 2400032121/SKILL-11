import { useState, useEffect } from "react";
import axios from "axios";

function FakePostList() {
  const [posts,   setPosts]   = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [userId,  setUserId]  = useState('all');
  const [userIds, setUserIds] = useState([]);

  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => {
        const data = res.data.posts;
        setPosts(data);
        setFiltered(data);
        const ids = [...new Set(data.map((p) => p.userId))];
        setUserIds(ids);
      });
  };

  useEffect(() => { loadPosts(); }, []);

  const handleFilter = (e) => {
    const val = e.target.value;
    setUserId(val);
    if (val === "all") setFiltered(posts);
    else setFiltered(posts.filter((p) => p.userId === Number(val)));
  };

  return (
    <div>
      <h2>Fake API Posts</h2>
      <label>Filter by User ID: </label>
      <select value={userId} onChange={handleFilter}>
        <option value="all">All</option>
        {userIds.map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>
      <button onClick={loadPosts} style={{marginLeft:"10px"}}>
        Refresh
      </button>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong><br/>
            <small>User: {p.userId}</small><br/>
            {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakePostList;
