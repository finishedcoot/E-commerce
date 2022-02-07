import styled from "styled-components"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import Announcement from "../components/Announcement/Announcement"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`

const Title = styled.h1 `
    font-weight:200;
`
const Desc = styled.p `
    margin:20px 0px;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin:30px 0;
    display:flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight:200;

`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`

const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4
    }
`


const Product = () => {
  return <Container>
            <Announcement/>
            <Navbar/>
                <Wrapper>
                    <ImgContainer>
                    <Image src="https://images.pexels.com/photos/9558777/pexels-photo-9558777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Some Product</Title>
                        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum cupiditate necessitatibus perferendis quibusdam, dolorem dolores distinctio voluptate nihil, quaerat harum minima voluptatem cumque? Voluptatem nam mollitia ad. Officiis, dolore!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur ipsum aperiam excepturi quisquam impedit nam, porro soluta molestias dicta tenetur sint. Natus nostrum in iste id provident blanditiis quidem eveniet, veritatis molestiae odit tenetur totam vero temporibus ullam illo eum laborum obcaecati? Quibusdam neque debitis sunt. Nobis, quas delectus.                        </Desc>
                        <Price>$ 20</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>;
};

export default Product;