
import styled from 'styled-components';


const Button = styled.button`
display: flex;
transition: all 0.6s ease;

color: var(--color-purple);
border-radius:none;
&:hover{
    background-color: var(--color-purple-light);
    color: var(--color-white);
}
`;

const ButtonSearch = styled(Button)`
background-color: ${props => props.primaryColor ? "var(--color-purple-semi)" : "var(--color-purple-light)"};
border: 1px solid var(--color-purple);
display: inline-block;
text-align: center;
text-decoration:none;
border-left:none;
width: 60px;
height: 50px;

`;

const ButtonProduct = styled(Button)`
    background-color: var(--color-white);
    border: 2px solid var(--color-purple-lite);
    width: 100px;
    height: 40px;
    padding-top: 4px;
`;

export { ButtonSearch, ButtonProduct };