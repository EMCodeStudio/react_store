import styled from 'styled-components';


const InputSearch = styled.input.attrs({type: "text", placeholder: "Busqueda"})`
    
    padding-left: 15px;
    &:focus{
        outline: none;
    }
    border: 1px solid gray;
    background-color:white;
    border-right:none;
    color: gray;
`;

export {InputSearch};