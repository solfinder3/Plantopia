import styled from 'styled-components';


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
 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const Header = styled.header `
font-family: 'Noto Sans TC', sans-serif;
color: #274428;
font-size: 50px;
display: flex;
justify-content: center;
`;

export const Form = styled.form `
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 60vw;
`;

export const Input = styled.input `
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 40px;
`;

export const Label = styled.label `
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  color: #274428;
`;

export const FormWrapper = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 90vh;
`;

