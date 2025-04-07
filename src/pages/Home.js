import {Link} from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link to="about">About</Link> &nbsp; &nsbsp;
        <Link to="items">Items</Link>
      </main>
    </>
  );
}



export default Home;
