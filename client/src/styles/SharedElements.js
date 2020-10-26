import styled from 'styled-components';

export const Button = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "white" : "#3A5A40"};
color: ${props => props.primary ? "#3A5A40" : "white"};
font-size: 1.3em;
padding: 0.25em 1em;
border: 2px solid #3A5A40;
border-radius: 10px;
height: 2em;
width: 7em;
margin-left: 10px;
 &:hover {
  color: ${props => props.primary ? "white" : "#3A5A40"};
  background: ${props => props.primary ? "#3A5A40" : "white"};
 }
`;

export const Header = styled.header `
border: 1px solid black;
font-family: 'Noto Sans TC', sans-serif;
display: flex;
justify-content: center;
`;

export const Form = styled.form `
font-family: 'Josefin Sans', sans-serif;

`;

export const Input = styled.input `
display: flex;
flex-direction: column;

`;

export const Label = styled.label `

`;

export const FormWrapper = styled.div `
border: 15px solid black;
display: flex;
justify-content: center;
flex-direction: column;

`;
