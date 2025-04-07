 import React from 'react';
 import { useParams } from 'react-router-dom';
 import { ITEMS } from '../data/itemData';


function ItemDetails() {
    const {id} = useParams();
    const item = ITEMS.find((item) => item.id == id);
    console.log("item", item);
  return (
    <>
    <main><h1>ItemDetails</h1></main>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    </>

  )
}

export default ItemDetails