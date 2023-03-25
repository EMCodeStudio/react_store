
import styled from 'styled-components';


const Button = styled.button`
display: flex;
transition: all 0.6s ease;
width: 60px;
height: 50px;
background-color: ${props => props.primaryColor ? "var(--color-purple)" : "var(--color-purple-light)"};
&:hover{
    background-color: var(--color-purple-light);
}
`;

const ButtonSearch = styled(Button)`

border: none;
display: inline-block;
text-align: center;
text-decoration:none;


`

export { ButtonSearch };