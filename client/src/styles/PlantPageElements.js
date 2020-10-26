import styled from 'styled-components';

export const PlantWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 2em;
  height: auto;

  @media screen and (max-width: 765px) {
    order: 2;
    flex-direction: column;
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

export const PlantInfo = styled.div`
   display: flex;
   flex-direction: column;
   order: 1;

   @media screen and (max-width: 765px) {
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
`;

export const Info = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  color: #3A5A40;
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin: 0 ;
`

export const Image = styled.img`
  align-self: center;
  order: 2;
  height: 600px;
  width: 600px;
  min-width: 600px;
  border-radius: 20px;

  @media screen and (max-width: 765px) {
    order: 1;
    align-self: center;
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const RoutineWrap = styled.div`
  display: flex;
  flex-direction: column;
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