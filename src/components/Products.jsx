import { useState,useEffect } from "react";
import axios from "axios"
import styled from "styled-components";
import data from "../data/products.json"
import Product from "./Product";


const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {

const [products,setProducts]=useState([]);
const [filteredProducts,setFilteredProducts]=useState([])

useEffect(() => {
 const getProducts = async ()=>{
  try{
    const res = await axios.get(
      cat
       ? `http://localhost:5000/api/products?category${cat}`
       : "http://localhost:5000/api/products");
    setProducts(res.data)
  }catch(err){}

 }
 getProducts()
}, [cat]);

  useEffect(() => {
    cat &&
    setFilteredProducts(
     products.filter(item=> Object.entries(filters).every(([key,value])=>
     item[key].includes(value)))
   )  
 }, [cat,filteredProducts,products]);


useEffect(() => {
  if(sort==="newest"){
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      )
  }else if(sort==="asc"){ 
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=>a.price - b.price)
      )
  }else{
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=>b.price - a.price)
      )
  }

}, [sort]);

  return <Container>
        {cat ? filteredProducts.map((product)=>(
            <Product item={product} key={product.id}/>
        )): products.slice(0,8).map((product)=>(
          <Product item={product} key={product.id}/>
        ))}
  </Container>;
};

export default Products;
