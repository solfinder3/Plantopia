import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`
export const FormInput = styled.input`
font-family: 'Josefin Sans', sans-serif;
font-weight: bold;
height: 24px;
width: 300px;
border-radius: 5px;
padding: 5px;
margin-left: 5px;
font-size: 15px;
`

export const InputDiv = styled.div`
color: #274428;
font-family: 'Josefin Sans', sans-serif;
font-size: 20px;
display: flex;
flex-direction: row;
padding-bottom: 8px;
padding-right: 5px;
`

export const Button = styled.button`
  font-family: 'Noto Sans TC', sans-serif;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "#274428"};
  color: ${props => props.primary ? "#274428" : "white"};
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: 2em;
  width: 7em;
  margin-left: 10px;
  align-self: center;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const CheckInput = styled.input`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  height: 20px;
  width: 40px;
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
  font-size: 15px;
`