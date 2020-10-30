import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

`

export const Button = styled.button`
  width: 40vw;
  font-family: 'Noto Sans TC', sans-serif;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "#274428"};
  color: ${props => props.primary ? "#274428" : "#274428"};
  font-size: 30px;
  padding: 0.25em 1em;
  border: 2px solid #274428;
  border-radius: 10px;
  height: auto;

 &:hover {
  color: ${props => props.primary ? "white" : "#274428"};
  background: ${props => props.primary ? "#274428" : "white"};
 }
`;

export const FormInput = styled.input`
  width: 40vw;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
`

export const DropDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-bottom: 10px;
`