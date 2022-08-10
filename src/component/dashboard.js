import * as React from 'react';
import ProductList from "../component/productList";
import MenuAppBar from "../component/appBar";

export default function Dashboard() {
  
  return (
    <>
        <MenuAppBar />
        <ProductList />
    </>
  );
}
