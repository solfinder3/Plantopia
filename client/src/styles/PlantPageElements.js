import styled from 'styled-components';

export const PlantWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2em;
  height: auto;
  width: auto;

  @media screen and (max-width: 1100px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 900px) {
    order: 2;
    flex-direction: column;
    align-items: center;
  }
`

export const RoutineButton = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "white" : "#3A5A40"};
color: ${props => props.primary ? "#3A5A40" : "white"};
font-size: 1.3em;
margin: 10px;
padding: 0.25em 1em;
border: 2px solid #3A5A40;
border-radius: 10px;
width: 8em;
align-items: center;
display: flex;
align-self: center;
justify-content: center;

 &:hover {
  color: ${props => props.primary ? "white" : "#3A5A40"};
  background: ${props => props.primary ? "#3A5A40" : "white"};
 }
`;

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
margin: 15px 10px;

 &:hover {
  color: ${props => props.primary ? "white" : "#3A5A40"};
  background: ${props => props.primary ? "#3A5A40" : "white"};
 }
`;

export const SpecButton = styled.button`
font-family: 'Noto Sans TC', sans-serif;
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "white" : "#3A5A40"};
color: ${props => props.primary ? "#3A5A40" : "white"};
font-size: 1.3em;
margin: 10px;
padding: 0.25em 1em;
border: 2px solid #3A5A40;
border-radius: 10px;
width: 8em;
align-items: center;
display: flex;
align-self: center;
justify-content: center;

 &:hover {
  color: ${props => props.primary ? "white" : "#3A5A40"};
  background: ${props => props.primary ? "#3A5A40" : "white"};
 }
`;

export const PlantInfo = styled.div`
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 900px) {
    order: 2;
    align-self: center;
  }
   `;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  order: 3;
`;

export const InfoTitle = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #3A5A40;
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const InfoTitle1 = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #3A5A40;
  font-size: 50px;
  display: none;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const Info = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #3A5A40;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Info1 = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #3A5A40;
  font-size: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`

export const Image = styled.img`
  align-self: center;
  order: 2;
  height: 575px;
  width: 575px;
  border-radius: 20px;

  @media screen and (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 900px) {
    order: 1;
    align-self: center;
    padding-bottom: 10px;
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  order: 2;

  @media screen and (max-width: 900px) {
    padding-bottom: 5px;
  }
`

export const RoutineWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RoutinesWrap1 = styled.div`
  display: flex;
  justify-content: center;
`

export const Routines = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #3A5A40;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
`

export const Specs = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #3A5A40;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
`

export const RightWrap = styled.div`
  order: 2;

  @media screen and (max-width: 900px) {
    order: 1;
  }
`

export const LeftWrap = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    order: 2;
  }
`

export const Line = styled.hr`
  width: 350px;
  height: 2px;
  color: #3A5A40;
  background: #3A5A40;
  border-radius: 40%;
  margin-left: 45px;

  @media screen and (max-width: 900px) {
    width: 450px;
    margin-left: 0;
  }
`

export const Line1 = styled.hr`
  width: 450px;
  height: 2px;
  color: #3A5A40;
  background: #3A5A40;
  border-radius: 40%;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`


