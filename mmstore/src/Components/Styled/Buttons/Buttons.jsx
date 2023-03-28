
import styled from 'styled-components';


const Button = styled.button`
display: flex;
transition: all 0.6s ease;
width: 60px;
height: 50px;
color: var(--color-purple);
background-color: ${props => props.primaryColor ? "var(--color-purple-semi)" : "var(--color-purple-light)"};
&:hover{
    background-color: var(--color-purple-light);
    color: var(--color-white);
}
`;

const ButtonSearch = styled(Button)`
border: 1px solid var(--color-purple);
display: inline-block;
text-align: center;
text-decoration:none;
border-left:none;

`

export { ButtonSearch };