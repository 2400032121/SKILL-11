import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>News Portal – Dashboard</h1>
      <nav>
        <Link to="/local-users">Local Users</Link> |{" "}
        <Link to="/users-api">Users API</Link>    |{" "}
        <Link to="/fake-posts">Fake API Posts</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
