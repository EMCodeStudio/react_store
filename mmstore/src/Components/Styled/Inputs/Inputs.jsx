import styled from 'styled-components';


const InputSearch = styled.input.attrs({type: "text", placeholder: "Busqueda"})`
    
    padding-left: 15px;
    &:focus{
        outline: none;
    }
    border: none;
`;

export {InputSearch};