import styled from "styled-components";
import { categories } from '../data/data';
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content:space-between;
    ${mobile({padding:"0px" , flexDirection:"column"})}
`

const Categories = () => {
  return <Container>
        {categories.map(category=>(
            <CategoryItem item={category} key={category.id}/>
        ))}
  </Container>;
};

export default Categories;
