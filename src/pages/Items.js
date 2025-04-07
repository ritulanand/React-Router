import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        {/* <Link to="/items/item-1">Item 1</Link>
        <Link to="/items/item-2">Item 2</Link>
        <Link to="/items/item-3">Item 3</Link> */}
        {ITEMS.map((item) => (
          <Link  key={item.id} to={`/items/${item.id}`}>
          <li >{item.id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Items;
