import styled from 'styled-components';

export const Link = styled.link`
background: ${props => props.primary ? "#3A5A40" : "white"};
color: ${props => props.primary ? "white" : "#3A5A40"};
font-size: 1.3em;
`;