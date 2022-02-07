import styled from "styled-components"


const  Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const  Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
`
const  Title = styled.h1`
   font-size:24px;
   font-weight:300; 
`

const  Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`

const  Inputs = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const  Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const  Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
  return <Container style={{background:"linear-gradient( #ffffff58, #ffffff5c), url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center"}}>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Inputs placeholder="name"/>
          <Inputs placeholder="last name"/>
          <Inputs placeholder="email"/>
          <Inputs placeholder="username"/>
          <Inputs placeholder="password"/>
          <Inputs placeholder="confirm password"/>
          <Agreement>
            By creating an account, I consent to be a good shopper and give you my personal info in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
  </Container>;
};

export default Register;
