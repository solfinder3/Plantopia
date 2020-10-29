import styled from 'styled-components';

export const Header = styled.h1`
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 50px;
  color: #3A5A40;
  align-self: center;
  padding-bottom: 50px;
`

export const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 40vw;
`

export const FormInput = styled.input`
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 90vh;
`

export const Button = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
color: ${props => props.primary ? "white" : "#3A5A40"};
background: ${props => props.primary ? "#3A5A40" : "white"};
font-size: 1.3em;
padding: 0.25em 1em;
border: 2px solid #3A5A40;
border-radius: 10px;
height: 2em;
width: 7em;

 &:hover {
  background: ${props => props.primary ? "white" : "#3A5A40"};
  color: ${props => props.primary ? "#3A5A40" : "white"};
 }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`