import styled from 'styled-components';

import Bg from '../images/bg.jpg';

export const Header = styled.h1`
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 50px;
  color: #3A5A40;
  align-self: center;
  padding-bottom: 50px;
  z-index: 1;
`

export const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 40vw;
  z-index: 1;
`

export const FormInput = styled.input`
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  max-width: 500px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100%;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background: url(${Bg});
`

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Button = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
color: ${props => props.primary ? "white" : "#274428"};
background: ${props => props.primary ? "#274428" : "white"};
font-size: 1.3em;
padding: 0.25em 1em;
border: 2px solid #3A5A40;
border-radius: 10px;
height: 2em;
width: 7em;

 &:hover {
  background: ${props => props.primary ? "white" : "#274428"};
  color: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`